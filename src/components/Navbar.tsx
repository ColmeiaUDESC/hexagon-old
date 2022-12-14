import Link from 'next/link';
import { Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import siteLinks from '../utils/siteLinks';

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

export default function Navbar() {
  const [theme, setTheme] = useState<string>('dark');
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleChangeTheme = (currentTheme: string) => {
    if (currentTheme === 'light') {
      setTheme('dark');
      document.documentElement.className = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.className = 'light';
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme');

    if (themeStorage) {
      setTheme(themeStorage);
      document.documentElement.className = themeStorage;
    }
  }, []);

  return (
    <nav
      className={clsx(
        'px-8 fixed top-0 left-0 w-full flex justify-between transition-all border-gray-100 dark:border-gray-800 duration-300 items-center z-50 bg-opacity-80 backdrop-blur bg-white dark:bg-gray-900 dark:bg-opacity-80',
        {
          'py-8 border-b': scrollPosition > 100,
          'py-12': scrollPosition <= 100
        }
      )}
    >
      <motion.div
        variants={animationVariantsContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto flex justify-between items-center"
      >
        <Link href="/" passHref>
          <motion.a variants={animationVariantsItem} className="font-extrabold text-2xl dark:text-white">
            hexagon
          </motion.a>
        </Link>
        <motion.ul variants={animationVariantsItem} className="flex items-center gap-12">
          {siteLinks.map((link) => (
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
}
