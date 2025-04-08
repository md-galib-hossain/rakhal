
import { z } from "zod";

export const cowTypeSchema = z.object({
  id: z.string().uuid().optional(), 
  typeName: z.string().min(1, "Type name is required"),
  isActive: z.boolean().optional().default(true),
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(),
});

// For creating a new CowType (no id, createdAt, updatedAt from client)
export const createCowTypeSchema = cowTypeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// For updating a CowType (id is usually provided, rest are optional)
export const updateCowTypeSchema = cowTypeSchema.partial().extend({
  id: z.string().uuid(),
  typeName: z.string().min(1, "Type name is required"),

});
export const CowTypeValidationSchema= {createCowTypeSchema,updateCowTypeSchema}