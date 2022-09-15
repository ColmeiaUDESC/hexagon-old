import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Home: NextPage = () => (
  <div className="w-full h-screen dark:bg-gray-900">
    <Navbar />
  </div>
);

export default Home;
