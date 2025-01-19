'use client';

import { motion } from "motion/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

import { useSectionInView } from '@/hooks/useSectionInView';

export const Hero = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section ref={ref} id="home" className="pt-10 scroll-mt-96">
      <div className="flex flex-col items-center gap-4">
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          viewport={{ once: true }}
          href="https://drive.google.com/file/d/1lFHdP0_AC6951T3TRiTWWcg0ZNg-hnsq/view?usp=sharing"
          target="_blank"
          className="button"
        >
          🎉
          <span>Check out my CV</span>
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
          className="max-w-md indent-4"
        >
          Hello, I&apos;m Da. I am front-end developer from Hanoi. I enjoy
          building sites and apps. My focus is React (Next.js).
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2"
        >
          <a
            href="https://linkedin.com/in/dada777"
            target="_blank"
            className="icon-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/dada-da"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://t.me/dada_daad"
            target="_blank"
            className="icon-link"
            rel="noreferrer"
          >
            <TelegramIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
