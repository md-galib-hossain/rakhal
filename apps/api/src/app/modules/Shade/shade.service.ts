import { db } from "@rakhal/db";

const createShade = async (shade: any) => {
  const result = await db.shade.create({
    data: shade,
  });
  return result;
};

const getAllShades = async () => {
  const result = await db.shade.findMany();
  return result;
};

export const ShadeService = {
  createShade,
  getAllShades,
};
