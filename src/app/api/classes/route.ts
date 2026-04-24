import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const classes = await db.virtualClass.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch classes" }, { status: 500 });
  }
}
