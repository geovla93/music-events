import type { NextApiRequest, NextApiResponse } from 'next';
import type { PrismaClient } from '@prisma/client';
import { Session, unstable_getServerSession } from 'next-auth';

import authOptions from '@/lib/next-auth';
import prisma from '@/lib/prisma';

type NextContext = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export type Context = NextContext & {
  prisma: PrismaClient;
  session: Session | null;
};

export async function buildContext({
  req,
  res,
}: NextContext): Promise<Context> {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log('🚀 ~ file: context.ts ~ line 24 ~ session', session);

  return { req, res, prisma, session };
}
