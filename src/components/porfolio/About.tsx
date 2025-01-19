"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { Skills } from "../porfolio/Skills";
import { SectionDivider } from "@/components/porfolio/SectionDivider";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-10 flex w-full scroll-mt-28 flex-col gap-10 items-center lg:py-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionDivider />
      <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
        About Me
      </h2>
      <div className="max-w-3xl text-center leading-7">
        <p className="mb-4">
          Experienced Middle Developer specializing in TypeScript, Vue, and
          JavaScript. Proficient in designing and implementing robust and
          user-friendly web applications. Passionate about staying up-to-date
          with the latest industry trends and technologies. Strong
          problem-solving skills, with a focus on creating efficient and elegant
          solutions. My in-depth understanding of Object-Oriented Programming
          (OOP) principles and SOLID design principles underscores my dedication
          to crafting clean, modular, and maintainable codebases. Committed to
          collaborating with cross-functional teams to deliver high-quality
          software products.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
      <SectionDivider />
    </motion.section>
  );
};
