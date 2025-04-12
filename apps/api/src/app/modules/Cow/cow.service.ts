import { db } from "@rakhal/db";
import { Cow, CreateCowPayload, BaseCow } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";
import { buildCowInclude, normalizeQuery } from "./cow.utils";

const createCow = async (cow: CreateCowPayload) => {
  const result = await db.cow.create({
    data: cow,
  });
  return result;
};

const getAllCows = async (
  rawQuery: Record<string, unknown>,
): Promise<TGenericResponse<BaseCow[]>> => {
  const { cleaned: query, withHistory } = normalizeQuery(rawQuery);

  const include = buildCowInclude(withHistory);

  const qb = new QueryBuilder(db.cow, query)
    .include(include)
    .search(["tag"])
    .filter()
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();

  return { meta, data };
};

const getSingleCow = async (id: string): Promise<BaseCow> => {
  const result = await db.cow.findUniqueOrThrow({
    where: { id },
    include: { farm: true, groupHistory: true, shadeHistory: true },
  });

  return result;
};

const updateCow = async (
  id: string,
  payload: Partial<BaseCow>,
): Promise<BaseCow> => {
  await db.cow.findUniqueOrThrow({
    where: { id },
  });
  const result = await db.cow.update({
    where: { id },
    data: payload,
  });
  return result;
};

const toggleIsActiveCow =async(id:string,isActive:boolean):Promise<BaseCow>=>{
  const result = await db.cow.update({
    where:{id},
    data:{isActive}
  })
  return result
}

export const CowService = { createCow, getAllCows,toggleIsActiveCow, getSingleCow,updateCow };
