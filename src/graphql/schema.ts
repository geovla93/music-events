import { join } from 'path';
import { makeSchema } from 'nexus';

import * as types from './types';

export const schema = makeSchema({
  types,
  contextType: {
    export: 'Context',
    module: join(process.cwd(), './src/graphql/context.ts'),
  },
  outputs: {
    schema: join(process.cwd(), './src/graphql/generated/schema.graphql'),
    typegen: join(process.cwd(), './src/graphql/generated/nexus.ts'),
  },
  sourceTypes: {
    mapping: { Date: 'Date' },
    modules: [{ alias: 'db', module: '@prisma/client' }],
  },
});
