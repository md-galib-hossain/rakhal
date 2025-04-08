import { db } from "@rakhal/db";
import {  Cow, CreateCowPayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";

const createCow = async (cow: CreateCowPayload) => {
  const result = await db.cow.create({
    data: cow,
  });
  return result;
};

const getAllCows = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(db.cow, query)
    .include({
      farm: true,
      cowType: true,
      currentGroup: true,
      currentShade: true,
      groupHistory: true,
      shadeHistory: true,
    })
    .search(['tag'])
    .filter()
    .sort()
    .paginate()
    .fields();

  // const cacheKey = `cows:${JSON.stringify(query)}`;
  // const {meta,data} = await getOrSetCache<TGenericResponse<Cow[]>>({
  //   key: cacheKey,
  //   ttl: 60,
  //   fetcher: () => queryBuilder.executeWithMeta(),
  // });

  
  const {meta,data} =await  queryBuilder.executeWithMeta()
  
  return {
    meta,data
  };
};


export const CowService = { createCow, getAllCows };