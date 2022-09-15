import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { Session } from 'next-auth';
import getServerAuthSession from '../common/get-server-auth-session';
import prisma from '../db/client';

type CreateContextOptions = {
  session: Session | null;
};

export const createContextInner = async (opts: CreateContextOptions) => ({
  session: opts.session,
  prisma
});

export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
  const { req, res } = opts;

  const session = await getServerAuthSession({ req, res });

  return createContextInner({
    session
  });
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
