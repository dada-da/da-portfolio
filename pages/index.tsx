import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Da&apos; portfolio</title>
      </Head>

      <Header />

      <section id="about-me">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
