import { Farm } from "./farm.interface";

export interface User {
    id: string;
    email: string;
    name?: string;
    farms: Farm[];
  }
  export type CreateUserPayload = Omit<Partial<User>, "id" | "farms"> & {
    email: string;
    name?: string;
  };
  