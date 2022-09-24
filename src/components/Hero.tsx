import { motion } from 'framer-motion';

const animationVariantsTextContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const animationVariantsTextItem = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0
  }
};

export default function Hero() {
  return (
    <div className="mx-auto h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 content-center">
      <motion.div variants={animationVariantsTextContainer} initial="hidden" animate="visible" className="block">
        <motion.h1
          variants={animationVariantsTextItem}
          className="font-extrabold text-3xl lg:text-6xl text-black dark:text-white"
        >
          Grupo de Extensão em Software e Hardware Livre
        </motion.h1>
        <motion.p variants={animationVariantsTextItem} className="mt-8 sm:text-xl text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde sint veniam magni obcaecati quas rerum.
          Repellat suscipit ut a nostrum eius eos pariatur odio consequuntur. Similique iste voluptas deserunt!
        </motion.p>
        <motion.div variants={animationVariantsTextItem} className="mt-8 flex flex-col lg:flex-row gap-4">
          <button
            type="button"
            className="px-8 py-6 lg:text-xl bg-gray-800 rounded-md text-white font-bold focus-ring hover-ring"
          >
            Entre em contato
          </button>

          <button
            type="button"
            className="px-8 py-6 lg:text-xl rounded-md text-black font-bold focus-ring hover-ring dark:text-white hover:bg-primary hover:text-white"
          >
            Conheça mais
          </button>
        </motion.div>
      </motion.div>
      <motion.img
        initial={{
          opacity: 0,
          y: -100
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        src="/illustration.svg"
        alt=""
        className="hidden lg:block"
      />
    </div>
  );
}
