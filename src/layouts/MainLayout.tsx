import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="mt-32 w-full max-w-6xl mx-auto p-8">{children}</div>
      <Footer />
    </>
  );
}
