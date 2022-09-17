import clsx from 'clsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

const content = [
  {
    id: 0,
    title: 'Desenvolvimento de software',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat suscipit sed, nesciunt aliquid iure architecto dicta at tenetur totam porro a dignissimos doloremque aliquam, accusamus sunt possimus. Voluptate, obcaecati.'
  },
  {
    id: 1,
    title: 'Desenvolvimento de hardware',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat suscipit sed, nesciunt aliquid iure architecto dicta at tenetur totam porro a dignissimos doloremque aliquam, accusamus sunt possimus. Voluptate, obcaecati.'
  },
  {
    id: 2,
    title: 'Palestras e minicursos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat suscipit sed, nesciunt aliquid iure architecto dicta at tenetur totam porro a dignissimos doloremque aliquam, accusamus sunt possimus. Voluptate, obcaecati.'
  }
];

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

const animationVariantsItemLeft = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0
  }
};

const animationVariantsRight = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
  }
};

const WhatWeDo = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <motion.div
      variants={animationVariantsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-24 lg:mt-0 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 content-center gap-8"
    >
      <motion.div variants={animationVariantsItemLeft} className="block">
        <h1 className="text-2xl lg:text-4xl font-bold text-black dark:text-white">Um pouco do que fazemos</h1>
        <p className="mt-4 text-black lg:text-lg dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat suscipit sed, nesciunt aliquid iure
          architecto dicta at tenetur totam porro a dignissimos doloremque aliquam, accusamus sunt possimus. Voluptate,
          obcaecati.
        </p>
        <button
          type="button"
          className="mt-8 px-8 py-6 lg:text-xl bg-gray-800 rounded-md text-white font-bold focus-ring hover-ring"
        >
          Processo seletivo
        </button>
      </motion.div>
      <motion.div variants={animationVariantsRight} className="flex flex-col gap-8">
        {content.map((item) => (
          <div key={item.id} className="w-full">
            <button
              onClick={() => setActive(item.id)}
              key={item.id}
              type="button"
              className={clsx('w-full text-left p-8 focus-ring hover-ring rounded-md text-black ', {
                'bg-primary text-white dark:bg-primary dark:text-white': active === item.id,
                'bg-gray-100 dark:bg-gray-800 dark:text-white': !(active === item.id)
              })}
            >
              <span className="text-xl lg:text-2xl font-bold">{item.title}</span>
            </button>
            {active === item.id && (
              <p className="text-black dark:text-white font-medium lg:text-lg p-4">{item.description}</p>
            )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhatWeDo;
