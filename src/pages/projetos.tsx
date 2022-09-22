import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import { ReactElement, useState } from 'react';

const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

function Projeto(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleHover = () => {
    setIsActive(!isActive);
  };

  return (
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
      className="group w-full bg-gray-50 p-8 rounded-md text-black hover-ring focus-ring dark:bg-gray-800 dark:text-white"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl">Kinect</h1>
        <AnimatePresence>
          {isActive && (
            <motion.a
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-xs flex items-center gap-2 font-medium text-gray-500 group-hover:text-black dark:text-gray-500 dark:group-hover:text-white transition-colors duration-300"
            >
              Visualizar demonstração
              <ArrowRight size={16} weight="regular" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-2 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos iste pariatur dolorem, recusandae amet eius
        facere? Fugit deleniti modi explicabo ipsum, aliquid mollitia tenetur soluta, optio dolor recusandae
        dignissimos.
      </p>
    </a>
  );
}

export default function ProjetosPage() {
  return (
    <div className="mt-32 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
        <Projeto />
      </div>
    </div>
  );
}
