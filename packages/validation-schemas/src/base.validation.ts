import { z } from "zod";

export const toggleActiveStatusSchema=z.object({
    isActive: z.boolean({
      required_error:"isActive is required",
      invalid_type_error:"isActive must be a boolean"
    })
  })
  