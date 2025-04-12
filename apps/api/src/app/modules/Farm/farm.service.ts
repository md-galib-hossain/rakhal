import { db } from "@rakhal/db";
import { BaseFarm, CreateFarmPayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";

const createFarm = async (payload: CreateFarmPayload) => {
  const result = await db.farm.create({
    data: payload,
  });
  return result;
};

const getAllFarms = async (
  query: Record<string, unknown>,
): Promise<TGenericResponse<BaseFarm[]>> => {
  const include = {
    owner: query.includeOwner === "true",
    groups: query.includeGroups === "true",
    shades: query.includeShades === "true",
    cows: query.includeCows === "true",
  };

  const qb = new QueryBuilder(db.farm, query)
    .include(include)
    .search(["name", "location"]) 
    .filter()
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();

  return { meta, data };
};

const getSingleFarm = async (id: string): Promise<BaseFarm> => {
  const result = await db.farm.findUniqueOrThrow({
    where: { id },
    include: { owner: true, groups: true, shades: true, cows: true },
  });

  return result;
};

const updateFarm = async (
  id: string,
  payload: Partial<BaseFarm>,
): Promise<BaseFarm> => {
  await db.farm.findUniqueOrThrow({
    where: { id },
  });
  const result = await db.farm.update({
    where: { id },
    data: payload,
  });
  return result;
};

const toggleIsActiveFarm = async (
  id: string,
  isActive: boolean,
): Promise<BaseFarm> => {
  const result = await db.farm.update({
    where: { id },
    data: { isActive },
  });
  return result;
};

export const FarmService = {
  createFarm,
  getAllFarms,
  getSingleFarm,
  updateFarm,
  toggleIsActiveFarm,
};