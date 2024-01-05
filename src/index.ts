import { z } from 'zod'

export const tenantSchema = z.object({
  id: z.string().uuid(),
  code: z.number(),
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
})

export type Tenant = z.infer<typeof tenantSchema>
