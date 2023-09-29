import { z } from "zod"

export const draftSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  servings: z.number().min(1),
  is_draft: z.boolean(),
})

export type DraftSchema = z.infer<typeof draftSchema>
