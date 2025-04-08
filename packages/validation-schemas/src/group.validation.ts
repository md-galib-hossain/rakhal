import { z } from "zod";

export const groupSchema = z.object({
  id: z.string().uuid().optional(),
  farmId: z.string().uuid({ message: "Valid farm ID is required" }),
  name: z.string().min(1, "Group name is required"),
  description: z.string().optional().nullable(), 
  isActive: z.boolean().optional().default(true),
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(), 
});

// For creating a new Group
export const createGroupSchema = groupSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// For updating a Group
export const updateGroupSchema = groupSchema.partial().extend({
  id: z.string().uuid(),
});
export const GroupValidationSchema= {createGroupSchema,updateGroupSchema}
