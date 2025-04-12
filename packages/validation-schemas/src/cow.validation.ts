import { z } from "zod";

// Enums
export const BreedTypeEnum = z.enum(["NATIVE", "CROSS_BRED", "EXOTIC"]);
export const BreedingStatusEnum = z.enum([
  "OPEN",
  "INSEMINATED",
  "PREGNANT",
  "MAYBE_PREGNANT",
  "DRY",
  "ISSUE",
  "MILKING_COW",
]);
export const GenderEnum = z.enum(["MALE", "FEMALE"]);

// Full Cow Schema
export const cowSchema = z.object({
  id: z.string().uuid().optional(), 
  tag: z.string().min(1, "Tag is required"), 
  farmId: z.string().uuid({ message: "Farm ID is required" }),
  cowTypeId: z.string().uuid().optional().nullable(),
  currentGroupId: z.string().uuid().optional().nullable(),
  currentShadeId: z.string().uuid().optional().nullable(),
  dob: z.coerce.date().optional().nullable(),
  breedType: BreedTypeEnum.optional().nullable(),
  hasDeliveredBefore: z.boolean().optional().default(false),
  breedingStatus: BreedingStatusEnum.optional().nullable(),
  familyId: z.string().uuid().optional().nullable(),
  gender: GenderEnum.optional().nullable(), 
  isActive: z.boolean().optional().default(true),
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(), 
});

export const createCowSchema = cowSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const updateCowSchema = cowSchema.omit({
  id:true,
  isActive:true,
  createdAt:true,
  updatedAt:true
}).partial()

export const CowValidationSchema= {createCowSchema,updateCowSchema}