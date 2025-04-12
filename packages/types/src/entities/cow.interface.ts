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
  cowTypeId?: string| null;
  currentGroupId?: string | null;
  currentShadeId?: string |null;
  dob?: Date| null; 
  breedType?: BreedType| null;
  hasDeliveredBefore: boolean;
  breedingStatus?: BreedingStatus| null;
  familyId?: string| null;
  gender?: string| null;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 

  farm: Farm;
  cowType: CowType| null | undefined;
  currentGroup: Group| null| undefined;
  currentShade: Shade| null| undefined;
  groupHistory: CowGroup[] | null| undefined;
  shadeHistory: CowShade[] | null;
}

export interface BaseCow extends Omit<Cow, 'groupHistory' | 'shadeHistory'|'farm' | 'cowType' | 'currentGroup' | 'currentShade'> {}



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




