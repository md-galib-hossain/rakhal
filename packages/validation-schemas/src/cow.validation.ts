import { z } from 'zod';

export const cowValidationSchema = z.object({
  id: z.string().uuid(),
  tag: z.string().min(1),
  dob: z.date().optional(),
  breedType: z.enum(['NATIVE', 'CROSS_BRED', 'EXOTIC']),
  isActive: z.boolean().default(true),
});
