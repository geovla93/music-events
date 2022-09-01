import { scalarType } from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';

export const Date = scalarType({
  name: 'Date',
  asNexusMethod: 'date',
  parseLiteral: DateTimeResolver.parseLiteral,
  parseValue: DateTimeResolver.parseValue,
  serialize: DateTimeResolver.serialize,
});
