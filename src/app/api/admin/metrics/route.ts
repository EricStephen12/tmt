import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function checkAdmin() {
  const { userId } = await auth();
  if (!userId) return false;
  const user = await db.user.findUnique({ where: { id: userId }, select: { role: true } });
  return user?.role === "ADMIN";
}

export async function GET() {
  if (!await checkAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const [revenue, bookCount, appCount, recentPurchases] = await Promise.all([
      db.purchase.aggregate({
        where: { status: "SUCCESS" },
        _sum: { amount: true }
      }),
      db.book.count(),
      db.trainingApplication.count(),
      db.purchase.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: true }
      })
    ]);

    return NextResponse.json({
      totalRevenue: revenue._sum.amount || 0,
      bookCount,
      appCount,
      recentPurchases
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 });
  }
}
