import { z } from 'zod';
import { t } from '../trpc';

const exampleRouter = t.router({
  hello: t.procedure.input(z.object({ text: z.string().nullish() }).nullish()).query(({ input }) => ({
    greeting: `hello ${input?.text ?? 'world'}`
  }))
});

export default exampleRouter;
