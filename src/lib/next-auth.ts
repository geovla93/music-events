import { verify } from 'argon2';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './prisma';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      credentials: { email: { type: 'email' }, password: { type: 'password' } },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Invalid credentials');
        }

        const { email, password } = credentials;
        const user = await prisma.user.findUnique({ where: { email } });
        if (user) {
          const isMatch = await verify(user.password, password);
          if (isMatch) {
            return {
              id: user.id,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
            };
          }
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user = { id: token.sub, name: token.name, email: token.email };
      }

      return session;
    },
  },
};

export default authOptions;
