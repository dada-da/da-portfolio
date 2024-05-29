'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import profilePic from '../../public/ava-img.jpg';

export const Hero = () => {
  return (
    <section id="home" className="py-10 scroll-mt-96">
      <div className="flex flex-col items-center text-center gap-4">
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          href="https://github.com/Skolaczk/next-starter"
          className="bg-primary w-fit text-black rounded px-3 py-2 text-sm font-semibold hover:bg-primary-hover"
        >
          🎉
          <span className="ml-3">Check out my CV</span>
        </motion.a>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
        >
          Cao Duc Anh - Fullstack developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="text-muted-foreground max-w-md"
        >
          Hello, I&apos;m Da. I am front-end developer from Hanoi. I enjoy
          building sites and apps. My focus is React (Next.js).
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      ></motion.div>
    </section>
  );
};
