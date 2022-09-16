import Link from 'next/link';
import { Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const animationVariantsContainer = {
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

const animationVariantsItem = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const test = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const navbarLinks = [
  {
    id: 0,
    name: 'Blog',
    path: '/blog'
  },
  {
    id: 1,
    name: 'Membros',
    path: '/membros'
  },
  {
    id: 2,
    name: 'Projetos',
    path: '/projetos'
  },
  {
    id: 30,
    name: 'Contato',
    path: '/contato'
  }
];

const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleChangeTheme = (currentTheme: 'light' | 'dark') => {
    if (currentTheme === 'light') {
      setTheme('dark');
      document.documentElement.className = 'dark';
    } else {
      setTheme('light');
      document.documentElement.className = 'light';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full flex justify-between transition-all border-gray-100 dark:border-gray-800 duration-300 items-center z-50 bg-opacity-80 backdrop-blur bg-white dark:bg-gray-900 dark:bg-opacity-80',
        {
          'px-4 py-8 border-b': scrollPosition > 100,
          'px-8 py-12': scrollPosition <= 100
        }
      )}
    >
      <motion.div
        variants={animationVariantsContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto flex justify-between items-center"
      >
        <Link href="/">
          <motion.a variants={animationVariantsItem} className="font-extrabold text-2xl dark:text-white">
            hexagon
          </motion.a>
        </Link>
        <motion.ul variants={animationVariantsItem} className="flex items-center gap-12">
          {navbarLinks.map((link) => (
            <Link href={link.path} key={link.id} passHref>
              <motion.a
                variants={test}
                className="font-semibold text-gray-500 transition-colors duration-300 hover:text-black dark:text-gray-400 focus:text-black dark:hover:text-white dark:focus:text-white"
              >
                {link.name}
              </motion.a>
            </Link>
          ))}
        </motion.ul>
        <motion.button
          variants={animationVariantsItem}
          type="button"
          onClick={() => handleChangeTheme(theme)}
          className="focus-ring hover-ring rounded-md text-black dark:text-white"
        >
          {theme === 'light' ? <Moon size={24} weight="fill" /> : <Sun size={24} weight="fill" />}
        </motion.button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
