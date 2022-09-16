import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Navbar />
    <div className="w-full max-w-6xl mx-auto">{children}</div>
    <Footer />
  </>
);

export default MainLayout;
