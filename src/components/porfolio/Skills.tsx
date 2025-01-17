import { motion } from "motion/react";

import { Icons } from '@/components/porfolio/Icons';
import { skillIcons } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-between items-center md:gap-8">
      {skillIcons.map((icon, index) => (
        <motion.div
          key={index + icon}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <Icons icon={icon} className="size-12" />
        </motion.div>
      ))}
    </div>
  );
};
