import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import trpc from '../utils/trpc';
import '../styles/globals.css';

interface Props {
  session: Session;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<Props>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
