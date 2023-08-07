import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Da&apos; portfolio</title>
      </Head>

      <Header />
    </div>
  );
};

export default Home;
