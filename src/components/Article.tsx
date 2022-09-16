import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

interface Props {
  title: string;
  date: Date;
  path: string;
  imageHref: string;
}

const animationVariantsContainer = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const animationVariantsItem = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const ArticleItem = ({ title, date, path, imageHref }: Props) => (
  <Link href={path} passHref>
    <motion.a variants={animationVariantsItem} className="group flex flex-col gap-4 focus:outline-none">
      <div className="relative w-full h-96 rounded-md focus-ring hover-ring overflow-hidden">
        <Image src={imageHref} layout="fill" alt="Article image" />
      </div>
      <div className="block">
        <p className="font-medium text-gray-500">
          {date.toLocaleDateString('pt-br', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        <h1 className="w-fit font-bold text-black text-2xl dark:text-white">
          {title}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-primary" />
        </h1>
      </div>
    </motion.a>
  </Link>
);

const Article = () => (
  <div className="max-w-6xl w-full">
    <div className="w-full flex flex-col gap-4">
      <Link href="/" passHref>
        <a className="flex items-center gap-2 self-end font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors duration-300">
          Veja todas as postagens
          <ArrowRight size={20} weight="regular" />
        </a>
      </Link>
      <motion.div
        variants={animationVariantsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-8"
      >
        <ArticleItem
          title="Desenvolvendo hexagon"
          date={new Date()}
          path="/"
          imageHref="https://github.com/joaodematte.png"
        />
        <ArticleItem
          title="Desenvolvendo hexagon"
          date={new Date()}
          path="/"
          imageHref="https://github.com/lucianowayand.png"
        />
        <ArticleItem
          title="Desenvolvendo hexagon"
          date={new Date()}
          path="/"
          imageHref="https://github.com/gabrielfjunkes.png"
        />
      </motion.div>
    </div>
  </div>
);

export default Article;
