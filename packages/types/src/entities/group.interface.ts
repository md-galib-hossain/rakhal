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
    description?: string;
    isActive: boolean;
    createdAt: Date; 
    updatedAt: Date; 
  
    farm: Farm;
    currentCows: Cow[];
    history: CowGroup[];
  }
  
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
  