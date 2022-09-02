import { AuthenticationError, UserInputError } from 'apollo-server-micro';
import { intArg, nonNull, queryType, stringArg } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field('userEvents', {
      type: 'Event',
      async resolve(_parent, _args, ctx) {
        if (!ctx.session) {
          throw new AuthenticationError('Not authenticated');
        }
        const user = ctx.session.user;

        return ctx.prisma.user
          .findUniqueOrThrow({ where: { id: user.id } })
          .events();
      },
    });

    t.nonNull.field('eventBySlug', {
      type: 'Event',
      args: { slug: nonNull(stringArg()) },
      async resolve(_parent, args, ctx) {
        return ctx.prisma.event.findUniqueOrThrow({
          where: { slug: args.slug },
        });
      },
    });

    t.nonNull.field('eventById', {
      type: 'Event',
      args: { id: nonNull(stringArg()) },
      async resolve(_parent, args, ctx) {
        return ctx.prisma.event.findUniqueOrThrow({ where: { id: args.id } });
      },
    });

    t.nonNull.list.nonNull.field('limitedEvents', {
      type: 'Event',
      args: {
        take: nonNull(intArg()),
      },
      async resolve(_parent, args, ctx) {
        return ctx.prisma.event.findMany({
          orderBy: { date: 'asc' },
          take: args.take,
        });
      },
    });

    t.nonNull.list.nonNull.field('eventsByKeyword', {
      type: 'Event',
      args: { keyword: nonNull(stringArg()) },
      async resolve(_parent, args, ctx) {
        if (args.keyword.length === 0) {
          throw new UserInputError('Keyword must be empty string');
        }

        return ctx.prisma.event.findMany({
          where: {
            OR: [
              { name: { contains: args.keyword, mode: 'insensitive' } },
              { performers: { hasSome: args.keyword } },
              { venue: { contains: args.keyword, mode: 'insensitive' } },
              { description: { contains: args.keyword, mode: 'insensitive' } },
            ],
          },
        });
      },
    });

    t.nonNull.field('paginatedEvents', {
      type: 'PaginationEvents',
      args: {
        take: intArg({ default: 5 }),
        page: intArg({ default: 1 }),
      },
      async resolve(_parent, args, ctx) {
        if (args.take === null || args.page === null) {
          throw new UserInputError('Bad input');
        }

        const count = await ctx.prisma.event.count();
        const totalPages = Math.ceil(count / Math.abs(args.take));

        const events = await ctx.prisma.event.findMany({
          skip: args.take * (args.page - 1),
          take: args.take,
          orderBy: { date: 'asc' },
        });

        const pagination = {
          total: count,
          totalPages,
          currentPage: args.page,
          perPage: args.take,
          from: (args.page - 1) * args.take + 1,
          to: (args.page - 1) * args.take + events.length,
        };

        return { events, pagination };
      },
    });

    t.nonNull.list.nonNull.field('events', {
      type: 'Event',
      async resolve(_parent, _args, ctx) {
        return ctx.prisma.event.findMany();
      },
    });
  },
});
