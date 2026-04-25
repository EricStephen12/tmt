import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ purchasedBookIds: [] });
    }

    const purchases = await db.purchase.findMany({
      where: {
        userId,
        status: "SUCCESS",
      },
      select: {
        bookId: true,
      },
    });

    const purchasedBookIds = purchases.map((p: any) => p.bookId);

    return NextResponse.json({ purchasedBookIds });
  } catch (error) {
    console.error("Check Purchases Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
