import { t, authedProcedure } from '../trpc';

const authRouter = t.router({
  getSession: t.procedure.query(({ ctx }) => ctx.session),
  getSecretMessage: authedProcedure.query(() => 'You are logged in and can see this secret message!')
});

export default authRouter;
