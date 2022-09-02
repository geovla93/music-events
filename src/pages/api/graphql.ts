import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { buildContext } from '@/graphql/context';
import { schema } from '@/graphql/schema';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = { api: { bodyParser: false } };

const apolloServer = new ApolloServer({
  schema,
  context: buildContext,
  cache: 'bounded',
  csrfPrevention: true,
});
const serverStart = apolloServer.start();

const cors = Cors({
  allowCredentials: true,
  allowHeaders: [
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'X-HTTP-Method-Override',
    'Content-Type',
    'Authorization',
    'Accept',
    'Access-Control-Allow-Credentials',
  ],
  allowMethods: ['POST', 'OPTIONS'],
  origin: 'https://studio.apollographql.com',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', ['POST', 'OPTIONS']);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await serverStart;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
