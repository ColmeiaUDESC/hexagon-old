import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from 'next/router';
import trpc from '../utils/trpc';
import '../styles/globals.css';
import MainLayout from '../layouts/MainLayout';

interface Props {
  session: Session;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<Props>) {
  const router = useRouter();

  if (router.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
