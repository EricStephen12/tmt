import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function POST(req: Request) {
  try {
    const text = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    if (!signature || !PAYSTACK_SECRET_KEY) {
      return new NextResponse("Missing signature or secret key", { status: 400 });
    }

    // Verify event origin
    const hash = crypto.createHmac("sha512", PAYSTACK_SECRET_KEY).update(text).digest("hex");
    if (hash !== signature) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const event = JSON.parse(text);

    if (event.event === "charge.success") {
      const paymentData = event.data;
      const amount = paymentData.amount;
      const reference = paymentData.reference;
      const { bookId, userId } = paymentData.metadata;

      // Ensure user exists before creating purchase
      await db.user.upsert({
        where: { id: userId },
        update: {},
        create: {
          id: userId,
          email: paymentData.customer.email,
        }
      });

      // Save the purchase
      await db.purchase.create({
        data: {
          userId,
          bookId,
          amount,
          reference,
          status: "SUCCESS",
        },
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Paystack Webhook Error:", error);
    return new NextResponse("Webhook error", { status: 500 });
  }
}
