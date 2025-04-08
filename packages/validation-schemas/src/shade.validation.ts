import { z } from "zod";

export const shadeSchema = z.object({
  id: z.string().uuid().optional(), 
  farmId: z.string().uuid({ message: "Valid farm ID is required" }),
  name: z.string().min(1, "Shade name is required"),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional().default(true),
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(), 
});

// For creating a new Shade
export const createShadeSchema = shadeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// For updating a Shade
export const updateShadeSchema = shadeSchema.partial().extend({
  id: z.string().uuid(),
});
