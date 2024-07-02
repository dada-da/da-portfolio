'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { Skills } from '../porfolio/Skills';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col gap-10 items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
        About Me
      </h2>
      <div className="max-w-3xl text-center leading-7">
        <p className="mb-4">
          With two years of experience working for the Ministry of Public
          Security as a web developer, I&apos;m strongly driven to advance my
          skills to become a senior developer and realize my career goal to be a
          software architect. In addition to being passionate to learn about and
          use new knowledge and technology, I always position myself in the
          shoes of end users and seek out the best solutions for them. My focus
          is on creating products for users rather than just making code work.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
