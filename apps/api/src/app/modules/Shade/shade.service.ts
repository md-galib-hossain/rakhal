import { db } from "@rakhal/db";
import { BaseShade, CreateShadePayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";

const createShade = async (payload: CreateShadePayload) => {
  const result = await db.shade.create({
    data: payload,
  });
  return result;
};

const getAllShades = async (
  query: Record<string, unknown>,
): Promise<TGenericResponse<BaseShade[]>> => {
  const include = {
    farm: query.includeFarm === "true",
    currentCows: query.includeCurrentCows === "true",
    history: query.includeHistory === "true",
  };

  const qb = new QueryBuilder(db.shade, query)
    .include(include)
    .search(["name", "description"])
    .filter()
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();

  return { meta, data };
};

const getSingleShade = async (id: string): Promise<BaseShade> => {
  const result = await db.shade.findUniqueOrThrow({
    where: { id },
    include: { farm: true, currentCows: true, history: true },
  });

  return result;
};

const updateShade = async (
  id: string,
  payload: Partial<BaseShade>,
): Promise<BaseShade> => {
  await db.shade.findUniqueOrThrow({
    where: { id },
  });
  const result = await db.shade.update({
    where: { id },
    data: payload,
  });
  return result;
};

const toggleIsActiveShade = async (
  id: string,
  isActive: boolean,
): Promise<BaseShade> => {
  const result = await db.shade.update({
    where: { id },
    data: { isActive },
  });
  return result;
};

export const ShadeService = {
  createShade,
  getAllShades,
  getSingleShade,
  updateShade,
  toggleIsActiveShade,
};
