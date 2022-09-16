import { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import { motion } from 'framer-motion';
import Article from '../components/Article';
import Navbar from '../components/Navbar';

const animationVariants = {
  hidden: {
    opacity: 1
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: NextPage = () => (
  <div className="w-full h-screen dark:bg-gray-900">
    <Navbar />
    <div className="max-w-6xl w-full mx-auto">
      <div className="w-full flex flex-col gap-4">
        <Link href="/" passHref>
          <a className="flex items-center gap-2 self-end font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors duration-300">
            Veja todas as postagens
            <ArrowRight size={20} weight="regular" />
          </a>
        </Link>
        <motion.div variants={animationVariants} initial="hidden" animate="show" className="grid grid-cols-3 gap-8">
          <Article
            title="Desenvolvendo hexagon"
            date={new Date()}
            path="/"
            imageHref="https://github.com/joaodematte.png"
          />
          <Article
            title="Desenvolvendo hexagon"
            date={new Date()}
            path="/"
            imageHref="https://github.com/lucianowayand.png"
          />
          <Article
            title="Desenvolvendo hexagon"
            date={new Date()}
            path="/"
            imageHref="https://github.com/gabrielfjunkes.png"
          />
        </motion.div>
      </div>
    </div>
  </div>
);

export default Home;
