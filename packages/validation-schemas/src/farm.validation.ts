import { z } from 'zod';

export const farmValidationSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  location: z.string().optional(),
  isActive: z.boolean().default(true),
});
