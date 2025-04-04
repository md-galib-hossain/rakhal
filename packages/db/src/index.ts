// src/index.ts
import { PrismaClient } from "@prisma/client";
import { db as internalDb } from "./db";
export const db: PrismaClient = internalDb;

export * from "@prisma/client"; // optional but useful
export { genId } from "./util";
