import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = signUpSchema.pick({ email: true, password: true });

export type TSignUp = z.infer<typeof signUpSchema>;
export type TSignIn = z.infer<typeof signInSchema>;
