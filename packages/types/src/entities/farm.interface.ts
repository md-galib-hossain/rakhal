import { Cow } from "./cow.interface";
import { Group } from "./group.interface";
import { Shade } from "./shade.interface";
import { User } from "./user.interface";

export interface Farm {
  id: string;
  ownerId: string;
  name: string;
  location?: string;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 

  owner: User;
  groups: Group[];
  shades: Shade[];
  cows: Cow[];
}

export type CreateFarmPayload = Omit<Partial<Farm>, "id" | "createdAt" | "updatedAt" | "owner" | "groups" | "shades" | "cows"> & {
  ownerId: string;
  name: string;
  isActive: boolean;
  location?: string;
};
