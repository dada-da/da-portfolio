'use client';

import { motion } from "motion/react";

export const SectionDivider = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        viewport={{ once: true }}
        className="bg-grey my-5 h-16 w-1 rounded-full sm:my-10"
      ></motion.div>
    </div>
  );
};
