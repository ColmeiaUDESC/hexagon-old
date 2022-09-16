import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  date: Date;
  path: string;
  imageHref: string;
}

const animationVariants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const Article = ({ title, date, path, imageHref }: Props) => (
  <Link href={path} passHref>
    <motion.a variants={animationVariants} className="group flex flex-col gap-4 focus:outline-none">
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

export default Article;
