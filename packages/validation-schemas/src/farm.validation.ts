import { z } from "zod";

export const farmSchema = z.object({
  id: z.string().uuid().optional(), 
  ownerId: z.string().uuid({ message: "Valid owner ID is required" }),
  name: z.string().min(1, "Farm name is required"),
  location: z.string().optional().nullable(), 
  isActive: z.boolean().optional().default(true),
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(), 
});

// For creating a new farm (exclude fields generated/updated by DB)
export const createFarmSchema = farmSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// For updating a farm (id is required, other fields optional)
export const updateFarmSchema = farmSchema.partial().extend({
  id: z.string().uuid(),
});
export const FarmValidationSchema= {createFarmSchema,updateFarmSchema}
