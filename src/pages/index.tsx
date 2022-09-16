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
  <>
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto h-screen grid grid-cols-2 content-center">
        <div className="block">
          <h1 className="font-extrabold text-6xl text-black dark:text-white">
            Grupo de Extensão em Software e Hardware Livre
          </h1>
          <p className="mt-8 text-xl text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde sint veniam magni obcaecati quas rerum.
            Repellat suscipit ut a nostrum eius eos pariatur odio consequuntur. Similique iste voluptas deserunt!
          </p>
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              className="px-8 py-6 text-xl bg-gray-800 rounded-md text-white font-bold focus-ring hover-ring"
            >
              Entre em contato
            </button>

            <button
              type="button"
              className="px-8 py-6 text-xl rounded-md text-black font-bold focus-ring hover-ring dark:text-white hover:bg-primary hover:text-white"
            >
              Conheça mais
            </button>
          </div>
        </div>
        <img src="/illustration.svg" alt="" />
      </div>
    </div>
    <div className="mt-8 max-w-6xl w-full mx-auto">
      <div className="w-full flex flex-col gap-4">
        <Link href="/" passHref>
          <a className="flex items-center gap-2 self-end font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors duration-300">
            Veja todas as postagens
            <ArrowRight size={20} weight="regular" />
          </a>
        </Link>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8"
        >
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
  </>
);

export default Home;
