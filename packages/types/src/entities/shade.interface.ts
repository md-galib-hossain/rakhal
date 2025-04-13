import { Cow } from "./cow.interface";
import { Farm } from "./farm.interface";

export interface Shade {
  id: string;
  farmId: string;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 

  farm: Farm;
  currentCows: Cow[];
  history: CowShade[];
}
export interface BaseShade extends Omit<Shade,"farm"|"currentCows"|"history"> {}
export interface CowShade {
    id: string;
    cowId: string;
    shadeId: string;
    assignedAt: Date; 
  
    cow: Cow;
    shade: Shade;
  }
  
  export type CreateShadePayload = Omit<Partial<Shade>, "id" | "createdAt" | "updatedAt" | "farm" | "currentCows" | "history"> & {
    farmId: string;
    name: string;
    isActive: boolean;
    description?: string;
  };
  
  export type CreateCowShadePayload = Omit<Partial<CowShade>, "id"  | "cow" | "shade"> & {
    cowId: string;
    shadeId: string;
    assignedAt: Date
  };
  