import { db } from "@rakhal/db";
import {  Cow, CreateCowPayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";
import { buildCowInclude, normalizeQuery } from "./cow.utils";

const createCow = async (cow: CreateCowPayload) => {
  const result = await db.cow.create({
    data: cow,
  });
  return result;
};

const getAllCows = async (rawQuery: Record<string, unknown>) => {
  const { cleaned: query, withHistory } = normalizeQuery(rawQuery);

  const include = buildCowInclude(withHistory);

  const qb = new QueryBuilder(db.cow, query)
    .include(include)
    .search(['tag'])
    .filter()
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();
  return { meta, data };
};


export const CowService = { createCow, getAllCows };