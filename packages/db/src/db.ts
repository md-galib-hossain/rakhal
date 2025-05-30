// import { PrismaClient } from "@prisma/client";

// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }

// let db: PrismaClient;

// const isServer =
//   typeof process !== "undefined" && process.versions && process.versions.node;
// if (isServer) {
//   if (process.env.NODE_ENV === "production") {
//     db = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient({
//         log: ["query", "info", "warn", "error"],
//       });
//     }
//     db = global.prisma;
//   }
// }

// export { db };

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
