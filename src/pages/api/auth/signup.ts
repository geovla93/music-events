import type { NextApiRequest, NextApiResponse } from 'next';

import { validate } from '@/utils/validate';
import { signUpSchema } from '@/utils/schemas';
import prisma from '@/lib/prisma';
import { ZodError } from 'zod';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const data = await validate(signUpSchema, req.body);
      const user = await prisma.user.create({ data });

      res
        .status(201)
        .json({ message: `New user created with id: ${user.id}`, data: user });
    } catch (error) {
      if (error instanceof Error) {
        if (error.cause instanceof ZodError) {
          res.status(400).json({ message: error.message });
        }
      }

      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
