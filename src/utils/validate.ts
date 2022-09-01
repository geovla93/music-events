import { ZodSchema } from 'zod';

export async function validate<T>(schema: ZodSchema<T>, args: any): Promise<T> {
  const result = await schema.spa(args);
  if (!result.success) {
    throw new Error(result.error.message, { cause: result.error });
  }

  return result.data;
}
