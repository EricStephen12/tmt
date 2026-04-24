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
    const apps = await db.trainingApplication.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(apps);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch apps" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!await checkAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const { id, status } = body;
    const app = await db.trainingApplication.update({
      where: { id },
      data: { status }
    });
    return NextResponse.json(app);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update app" }, { status: 500 });
  }
}
