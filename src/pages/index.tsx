import { NextPage } from 'next';
import trpc from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from hexagon' });

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="p-4 bg-white rounded-md">
        <h1 className="font-bold text-4xl">{hello.data?.greeting}</h1>
      </div>
    </main>
  );
};

export default Home;
