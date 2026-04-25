import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL;

// Initialize adapter only if we have a connection string
let adapter = null;
if (connectionString) {
  const pool = new Pool({ connectionString });
  // @ts-ignore - Prisma 7 adapter typing workaround
  adapter = new PrismaNeon(pool);
}

export const db = globalThis.prisma || new PrismaClient((adapter ? { adapter } : {}) as any);

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
