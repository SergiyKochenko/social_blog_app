import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaNeon } from "@prisma/adapter-neon";

const chooseAdapter = () => {
  const url = process.env.DATABASE_URL ?? "";
  const forced = process.env.PRISMA_ADAPTER?.toLowerCase();

  if (forced === "neon") return new PrismaNeon({ connectionString: url });
  if (forced === "pg" || forced === "postgres") return new PrismaPg({ connectionString: url });

  // auto-detect Neon from URL
  if (url.includes("neon") || url.includes("neondatabase")) return new PrismaNeon({ connectionString: url });

  return new PrismaPg({ connectionString: url });
};

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter: chooseAdapter() });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
