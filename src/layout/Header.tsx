'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/helpers/ActiveSectionProvider';
import { links } from '@/lib/data';

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-overlay sticky py-5 top-0 z-20 flex justify-center items-center gap-2 backdrop-blur-sm"
    >
      <nav className="text-sm">
        <ul className="flex gap-5">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`hover:link-hover relative px-4 py-2 transition-colors ${
                  name === activeSection ? 'text-black' : ''
                }`}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="bg-primary absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
