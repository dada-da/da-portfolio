"use client";

import { motion } from "motion/react";

export const SectionDivider = ({ customClass = "" }) => {
  return (
    <div className={`flex flex-col items-center ${customClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        viewport={{ once: true }}
        className="bg-grey h-20 w-1 rounded-full lg:h-40"
      ></motion.div>
    </div>
  );
};
