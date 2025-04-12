import { db } from "@rakhal/db";
import { BaseCowType, CreateCowTypePayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";

const createCowType = async (payload: CreateCowTypePayload) => {
  const result = await db.cowType.create({
    data: payload,
  });
  return result;
};

const getAllCowTypes = async (
  query: Record<string, unknown>,
): Promise<TGenericResponse<BaseCowType[]>> => {


  const qb = new QueryBuilder(db.cowType, query)
    .search(["typeName"])
    .filter() 
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();

  return { meta, data };
};

const getSingleCowType = async (id: string): Promise<BaseCowType> => {
  const result = await db.cowType.findUniqueOrThrow({
    where: { id },
    include: { cows: true }, 
  });

  return result;
};

const updateCowType = async (
  id: string,
  payload: Partial<BaseCowType>,
): Promise<BaseCowType> => {
  await db.cowType.findUniqueOrThrow({
    where: { id },
  });
  const result = await db.cowType.update({
    where: { id },
    data: payload,
  });
  return result;
};

const toggleIsActiveCowType = async (
  id: string,
  isActive: boolean,
): Promise<BaseCowType> => {
  const result = await db.cowType.update({
    where: { id },
    data: { isActive },
  });
  return result;
};

export const CowTypeService = {
  createCowType,
  getAllCowTypes,
  getSingleCowType,
  updateCowType,
  toggleIsActiveCowType,
};