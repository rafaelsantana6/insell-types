import { z } from 'zod';
export declare const tenantSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodNumber;
    name: z.ZodString;
    isActive: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    code?: number;
    name?: string;
    isActive?: boolean;
    createdAt?: Date;
}, {
    id?: string;
    code?: number;
    name?: string;
    isActive?: boolean;
    createdAt?: Date;
}>;
export type Tenant = z.infer<typeof tenantSchema>;
