import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// Helper to check admin role (placeholder logic - you should set this in Clerk metadata or similar)
async function checkAdmin() {
  const { userId } = await auth();
  if (!userId) return false;
  
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true }
  });
  
  return user?.role === "ADMIN";
}

export async function GET() {
  if (!await checkAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const books = await db.book.findMany({
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!await checkAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, description, price, downloadUrl, category, iconName } = body;

    const book = await db.book.create({
      data: {
        title,
        description,
        price: parseInt(price),
        downloadUrl,
        category,
        iconName
      }
    });

    return NextResponse.json(book);
  } catch (error) {
    console.error("Create Book Error:", error);
    return NextResponse.json({ error: "Failed to create book" }, { status: 500 });
  }
}
