type BreedType = 'NATIVE' | 'CROSS_BRED' | 'EXOTIC'; 
type BreedingStatus = 'OPEN' | 'INSEMINATED' | 'PREGNANT' | 'MAYBE_PREGNANT' | 'DRY' | 'ISSUE' | 'MILKING_COW'; // Enum values for BreedingStatus

export interface User {
  id: string;
  email: string;
  name?: string;
  farms: Farm[];
}

export interface CowType {
  id: string;
  typeName: string;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 
  cows: Cow[];
}

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

export interface CowShade {
  id: string;
  cowId: string;
  shadeId: string;
  assignedAt: Date; 

  cow: Cow;
  shade: Shade;
}

export interface Shade {
  id: string;
  farmId: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: Date; 
  updatedAt: Date; 

  farm: Farm;
  currentCows: Cow[];
  history: CowShade[];
}

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
