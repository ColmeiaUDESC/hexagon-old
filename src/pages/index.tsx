import { NextPage } from 'next';
import trpc from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from hexagon' });

  return <h1>{hello.data?.greeting}</h1>;
};

export default Home;
