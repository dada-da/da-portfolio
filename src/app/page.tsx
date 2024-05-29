import { Metadata } from 'next';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/layout/Header';
import { Hero } from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <ThemeToggle />
    </>
  );
};

export default Home;
