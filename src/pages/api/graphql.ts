import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { buildContext } from '@/graphql/context';
import { schema } from '@/graphql/schema';

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
  allowHeaders: ['Origin', 'Credentials', 'Content-Type'],
  allowMethods: ['POST', 'OPTIONS'],
  origin: 'https://studio.apollographql.com',
});

export default cors(async function (req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await serverStart;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
