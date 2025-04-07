import { db } from "@rakhal/db";
import { getOrSetCache } from "@rakhal/redis";

const createCow = async (cow: any) => {
  console.log(cow);
  const result = await db.cow.create({
    data: cow,
  });
  return result
};

const getAllCows = async () => {
  // const result = await db.cow.findMany()
  const cows = await getOrSetCache({
    key: "cows",
    ttl: 60,
    fetcher: () =>
      db.cow.findMany({
        include: {
          farm: true,
          cowType: true,
          currentGroup: true,
          currentShade: true,
          groupHistory: true,
          shadeHistory: true,
        },
      }),
  });

  return cows;
};

export const CowService = { createCow, getAllCows };
