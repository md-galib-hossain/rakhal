import { db } from "@rakhal/db";

const createUser = async (payload: any) => {
  const result = await db.user.create({
    data: payload,
  });
  return result;
};

const getAllUsers = async () => {
  const result = await db.user.findMany();
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};
