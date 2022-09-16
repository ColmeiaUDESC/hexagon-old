import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Navbar />
    <div className="w-full max-w-6xl mx-auto">{children}</div>
    <footer className="w-full bg-gray-800 text-white">
      <div className="mx-auto w-full max-w-6xl px-8 py-12 grid grid-cols-3 gap-8">
        <div className="block">
          <span className="font-extrabold text-2xl dark:text-white">hexagon</span>
          <p className="text-gray-500">
            Desenvolvido com ❤️ pelo{' '}
            <a
              href="https://www.udesc.br/cct/colmeia"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white"
            >
              Colmeia
            </a>
          </p>
        </div>
        <div className="block">
          <h1 className="font-bold text-lg">Site</h1>
          <ul className="flex flex-col gap-2">
            <li className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white">Blog</li>
            <li className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white">Membros</li>
            <li className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white">Projetos</li>
            <li className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white">Contato</li>
          </ul>
        </div>
        <div className="block">
          <h1 className="font-bold text-lg">Processo seletivo</h1>
          <p className="text-gray-500">No momento nosso processo seletivo não está aberto</p>
        </div>
      </div>
    </footer>
  </>
);

export default MainLayout;
