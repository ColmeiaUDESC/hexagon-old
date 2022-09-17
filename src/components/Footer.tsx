import Link from 'next/link';
import siteLinks from '../utils/siteLinks';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="mx-auto w-full max-w-6xl px-8 py-12 grid lg:grid-cols-3 gap-8">
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
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg">Site</h1>
          <ul className="flex flex-col gap-2">
            {siteLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.path} passHref>
                  <a className="font-medium text-gray-500 transitiona-all duration-300 hover:text-white">{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg">Processo seletivo</h1>
          <p className="text-gray-500">No momento nosso processo seletivo não está aberto</p>
        </div>
      </div>
    </footer>
  );
}
