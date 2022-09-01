import { objectType } from "nexus";

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.nonNull.list.nonNull.field('events', {
      type: 'Event',
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user
          .findUniqueOrThrow({ where: { id: parent.id } })
          .events();
      },
    });
  },
});

export const Event = objectType({
  name: 'Event',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
    t.nonNull.string('name');
    t.nonNull.string('slug');
    t.nonNull.string('venue');
    t.nonNull.string('address');
    t.nonNull.list.nonNull.string('performers');
    t.nonNull.string('date');
    t.nonNull.string('time');
    t.nonNull.string('description');
    t.string('image');
    t.nonNull.string('userId');
    t.nonNull.field('user', {
      type: 'User',
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user.findUniqueOrThrow({
          where: { id: parent.userId },
        });
      },
    });
  },
});

export const Pagination = objectType({
  name: 'Pagination',
  definition(t) {
    t.nonNull.int('total');
    t.nonNull.int('totalPages');
    t.nonNull.int('currentPage');
    t.nonNull.int('perPage');
    t.nonNull.int('from');
    t.nonNull.int('to');
  },
});

export const PaginationEvents = objectType({
  name: 'PaginationEvents',
  definition(t) {
    t.nonNull.list.nonNull.field('events', { type: 'Event' });
    t.nonNull.field('pagination', { type: 'Pagination' });
  },
});