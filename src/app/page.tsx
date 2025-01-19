import { Metadata } from "next";

import { Hero } from "@/components/porfolio/Hero";
import { About } from "@/components/porfolio/About";
import { Experience } from "@/components/porfolio/Experience";

export const metadata: Metadata = {
  title: "Da's porfolio",
  description: "Welcome to Next.js",
};

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
