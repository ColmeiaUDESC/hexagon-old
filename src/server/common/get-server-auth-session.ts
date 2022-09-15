import type { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]';

const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions);

export default getServerAuthSession;
