import { db } from "@rakhal/db";

const createGroup = async (group: any) => {
  const result = await db.group.create({
    data: group,
  });
  return result;
};

const getAllGroups = async () => {
  const result = await db.group.findMany();
  return result;
};

export const GroupService = {
  createGroup,
  getAllGroups,
};
