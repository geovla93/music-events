import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import { mutationType, nonNull, stringArg } from 'nexus';

import cloudinary from '@/lib/cloudinary';
import { deNullify } from '@/utils/denullify';
import slugify from '@/utils/slugify';

export const Mutation = mutationType({
  definition(t) {
    t.nonNull.field('createEvent', {
      type: 'Event',
      args: {
        name: nonNull(stringArg()),
        address: nonNull(stringArg()),
        performer: nonNull(stringArg()),
        venue: nonNull(stringArg()),
        date: nonNull(stringArg()),
        time: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.session) {
          throw new AuthenticationError('Not authenticated');
        }
        const user = ctx.session.user;

        return ctx.prisma.event.create({
          data: {
            ...args,
            slug: slugify(args.name),
            user: { connect: { id: user.id } },
          },
        });
      },
    });

    t.nonNull.field('updateEvent', {
      type: 'Event',
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        address: stringArg(),
        performer: stringArg(),
        venue: stringArg(),
        date: stringArg(),
        time: stringArg(),
        description: stringArg(),
        image: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.session) {
          throw new AuthenticationError('Not authenticated');
        }
        const user = ctx.session.user;

        const { id, ...rest } = args;
        const event = await ctx.prisma.event.findUniqueOrThrow({
          where: { id },
        });

        if (event.userId !== user.id) {
          throw new ForbiddenError('Forbidden');
        }

        return ctx.prisma.event.update({
          where: { id },
          data: deNullify(rest),
        });
      },
    });

    t.nonNull.field('deleteEvent', {
      type: 'Event',
      args: { slug: nonNull(stringArg()) },
      async resolve(_parent, args, ctx) {
        if (!ctx.session) {
          throw new AuthenticationError('Not authenticated');
        }
        const user = ctx.session.user;

        const event = await ctx.prisma.event.findUniqueOrThrow({
          where: { slug: args.slug },
        });

        if (event.userId !== user.id) {
          throw new ForbiddenError('Forbidden');
        }

        const imageUrl = event.image?.split('/').reverse();
        if (typeof imageUrl !== 'undefined') {
          const [url, folder] = imageUrl;
          await cloudinary.uploader.destroy(`${folder}/${url.split('.')[0]}`, {
            invalidate: true,
            resource_type: 'image',
          });
        }

        return ctx.prisma.event.delete({ where: { id: event.id } });
      },
    });
  },
});
