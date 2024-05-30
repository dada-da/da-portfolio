import { Metadata } from 'next';

import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionDivider } from '@/components/SectionDivider';
import { Header } from '@/layout/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';

export const metadata: Metadata = {
  title: "Da's porfolio",
  description: 'Welcome to Next.js',
};

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <SectionDivider />
        <About />
      </div>
      <ThemeToggle />
    </>
  );
};

export default Home;
