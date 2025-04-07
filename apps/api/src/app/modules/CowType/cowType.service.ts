import { db } from "@rakhal/db";

const createCowType = async (payload: any) => {
  const result = await db.cowType.create({
    data: payload,
  });
  return result;
};

const getAllCowTypes = async () => {
  const result = await db.cowType.findMany();
  return result;
};

export const CowTypeService = {
  createCowType,
  getAllCowTypes,
};
