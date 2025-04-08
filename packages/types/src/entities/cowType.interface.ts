import { Cow } from "./cow.interface";

export interface CowType {
    id: string;
    typeName: string;
    isActive: boolean;
    createdAt: Date; 
    updatedAt: Date; 
    cows: Cow[];
  }
  export type CreateCowTypePayload = Omit<Partial<CowType>, "id" | "createdAt" | "updatedAt" | "cows"> & {
    typeName: string;
    isActive: boolean;
  };
  