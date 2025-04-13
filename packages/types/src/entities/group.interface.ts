import { Cow } from "./cow.interface";
import { Farm } from "./farm.interface";

export interface CowGroup {
    id: string;
    cowId: string;
    groupId: string;
    assignedAt: Date; 
  
    cow: Cow;
    group: Group;
  }
  
  export interface Group {
    id: string;
    farmId: string;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date; 
    updatedAt: Date; 
  
    farm: Farm;
    currentCows: Cow[];
    history: CowGroup[];
  }
  
  export interface BaseGroup extends Omit<Group, "farm" | "currentCows" | "history"> {}
  export type CreateGroupPayload = Omit<Partial<Group>, "id" | "createdAt" | "updatedAt" | "farm" | "currentCows" | "history"> & {
    farmId: string;
    name: string;
    isActive: boolean;
    description?: string;
  };
  export type CreateCowGroupPayload = Omit<Partial<CowGroup>, "id"  | "cow" | "group"> & {
    cowId: string;
    groupId: string;
    assignedAt: Date;
  };
  