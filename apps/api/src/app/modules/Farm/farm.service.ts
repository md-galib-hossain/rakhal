import { db } from "@rakhal/db";

const createFarm = async (farm: any) => {
  const result = await db.farm.create({
    data: farm,
  });
  return result;
};

const getAllFarms = async () => {
  const result = await db.farm.findMany();
  return result;
};

export const FarmService = {
  createFarm,
  getAllFarms,
};
