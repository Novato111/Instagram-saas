import { PrismaClient } from "@prisma/client";

declare global {
  // Extend the Node.js global object to include `prisma`
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }

  // Extend `globalThis` if necessary
  var prisma: PrismaClient | undefined;
}

// Create a single instance of PrismaClient
export const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}
