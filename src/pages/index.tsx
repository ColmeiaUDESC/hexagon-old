import { NextPage } from 'next';
import Article from '../components/Article';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';

const Home: NextPage = () => (
  <>
    <Hero />
    <Article />
    <WhatWeDo />
  </>
);

export default Home;
