import { CowType } from "./cowType.interface";
import { Farm } from "./farm.interface";
import { CowGroup, Group } from "./group.interface";
import { CowShade, Shade } from "./shade.interface";

type BreedType = 'NATIVE' | 'CROSS_BRED' | 'EXOTIC'; 
type BreedingStatus = 'OPEN' | 'INSEMINATED' | 'PREGNANT' | 'MAYBE_PREGNANT' | 'DRY' | 'ISSUE' | 'MILKING_COW'; // Enum values for BreedingStatus



export interface Cow {
  id: string;
  tag: string;
  farmId: string;
  cowTypeId?: string;
  currentGroupId?: string;
  currentShadeId?: string;
  dob?: Date; 
  breedType?: BreedType;
  hasDeliveredBefore: boolean;
  breedingStatus?: BreedingStatus;
  familyId?: string;
  gender?: string;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 

  farm: Farm;
  cowType?: CowType;
  currentGroup?: Group;
  currentShade?: Shade;
  groupHistory: CowGroup[];
  shadeHistory: CowShade[];
}



export type CreateCowPayload = Omit<
  Partial<Cow>, 
  | "id"
  | "createdAt"
  | "updatedAt"
  | "farm"
  | "cowType"
  | "currentGroup"
  | "currentShade"
  | "groupHistory"
  | "shadeHistory"
> & {
  tag: string;
  farmId: string;
  hasDeliveredBefore?: boolean;
};




