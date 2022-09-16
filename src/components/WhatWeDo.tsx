import clsx from 'clsx';
import { useState } from 'react';

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

const WhatWeDo = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full h-screen grid grid-cols-2 content-center gap-8">
      <div className="block">
        <h1 className="text-6xl font-bold text-black dark:text-white">Um pouco do que fazemos</h1>
        <p className="mt-4 text-black text-lg dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat suscipit sed, nesciunt aliquid iure
          architecto dicta at tenetur totam porro a dignissimos doloremque aliquam, accusamus sunt possimus. Voluptate,
          obcaecati.
        </p>
        <button
          type="button"
          className="mt-8 px-8 py-6 text-xl bg-gray-800 rounded-md text-white font-bold focus-ring hover-ring"
        >
          Processo seletivo
        </button>
      </div>
      <div className="flex flex-col gap-8">
        {content.map((item) => (
          <>
            <button
              onClick={() => setActive(item.id)}
              key={item.id}
              type="button"
              className={clsx('text-left p-8  focus-ring hover-ring rounded-md text-black ', {
                'bg-primary text-white dark:bg-primary dark:text-white': active === item.id,
                'bg-gray-100 dark:bg-gray-800 dark:text-white': !(active === item.id)
              })}
            >
              <span className="text-2xl font-bold">{item.title}</span>
            </button>
            {active === item.id && (
              <p className="text-black dark:text-white font-medium text-lg px-4">{item.description}</p>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
