import { db } from "@rakhal/db";
import { BaseGroup, CreateGroupPayload } from "@rakhal/types";
import QueryBuilder from "../../builder/queryBuilder";
import { TGenericResponse } from "../../interface/interface";

const createGroup = async (payload: CreateGroupPayload) => {
  const result = await db.group.create({
    data: payload,
  });
  return result;
};

const getAllGroups = async (
  query: Record<string, unknown>,
): Promise<TGenericResponse<BaseGroup[]>> => {
  const include = {
    farm: query.includeFarm === "true",
    currentCows: query.includeCurrentCows === "true",
    history: query.includeHistory === "true",
  };

  const qb = new QueryBuilder(db.group, query)
    .include(include)
    .search(["name", "description"])
    .filter()
    .sort()
    .cursorPaginate()
    .fields();

  const { meta, data } = await qb.executeWithMeta();

  return { meta, data };
};

const getSingleGroup = async (id: string): Promise<BaseGroup> => {
  const result = await db.group.findUniqueOrThrow({
    where: { id },
    include: { farm: true, currentCows: true, history: true },
  });

  return result;
};

const updateGroup = async (
  id: string,
  payload: Partial<BaseGroup>,
): Promise<BaseGroup> => {
  await db.group.findUniqueOrThrow({
    where: { id },
  });
  const result = await db.group.update({
    where: { id },
    data: payload,
  });
  return result;
};

const toggleIsActiveGroup = async (
  id: string,
  isActive: boolean,
): Promise<BaseGroup> => {
  const result = await db.group.update({
    where: { id },
    data: { isActive },
  });
  return result;
};

export const GroupService = {
  createGroup,
  getAllGroups,
  getSingleGroup,
  updateGroup,
  toggleIsActiveGroup,
};