import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = signUpSchema.pick({ email: true, password: true });

export const createEventSchema = z.object({
  name: z.string(),
  venue: z.string(),
  performers: z.string(),
  description: z.string(),
  address: z.string(),
  date: z.string(),
  time: z.string(),
});

export const updateEventSchema = createEventSchema
  .extend({ image: z.string().optional() })
  .partial();

export type TSignUp = z.infer<typeof signUpSchema>;
export type TSignIn = z.infer<typeof signInSchema>;
export type TCreateEvent = z.infer<typeof createEventSchema>;
export type TUpdateEvent = z.infer<typeof updateEventSchema>;
