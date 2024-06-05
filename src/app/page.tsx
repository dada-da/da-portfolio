import { Metadata } from 'next';

import { ThemeToggle } from '@/components/common/ThemeToggle';
import { SectionDivider } from '@/components/porfolio/SectionDivider';
import { Header } from '@/layout/Header';
import { Hero } from '@/components/porfolio/Hero';
import { About } from '@/components/porfolio/About';
import { Experience } from '@/components/porfolio/Experience';

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
        <Experience />
      </div>
      <ThemeToggle />
    </>
  );
};

export default Home;
