import Link from 'next/link';
import { Moon, Sun } from 'phosphor-react';
import { useState } from 'react';

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

  const handleChangeTheme = (currentTheme: 'light' | 'dark') => {
    if (currentTheme === 'light') {
      setTheme('dark');
      document.documentElement.className = 'dark';
    } else {
      setTheme('light');
      document.documentElement.className = 'light';
    }
  };

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-12 flex justify-between items-center">
      <Link href="/">
        <a className="font-extrabold text-2xl dark:text-white">hexagon</a>
      </Link>
      <ul className="flex items-center gap-12">
        {navbarLinks.map((link) => (
          <Link href={link.path} key={link.id} passHref>
            <a className="font-semibold text-gray-500 transition-colors duration-300 hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white">
              {link.name}
            </a>
          </Link>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => handleChangeTheme(theme)}
        className="focus-ring hover-ring rounded-md text-black dark:text-white"
      >
        {theme === 'light' ? <Moon size={24} weight="fill" /> : <Sun size={24} weight="fill" />}
      </button>
    </nav>
  );
};

export default Navbar;
