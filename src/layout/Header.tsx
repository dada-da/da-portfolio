import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import ThemeToggle from '../components/themeToggle';
import { useActiveSection } from '@/hooks/useActiveSection';
import { links } from '@/lib/data';
import { SectionName } from '@/lib/types';

type Props = {
  path: string;
};

const LinkItem = ({ href, name }: { name: SectionName; href: string }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <ListItem
      className="relative px-4 py-2 transition-colors"
      sx={[
        {
          '&:hover': { backgroundColor: 'palette.text.disabled' },
        },
        name === activeSection && {
          '&:hover': { backgroundColor: 'palette.text.secondary' },
        },
      ]}
    >
      <NextLink
        href={href}
        onClick={() => {
          setActiveSection(name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {name}
        {name === activeSection && (
          <motion.span
            className="bg-primary absolute inset-0 -z-10 rounded-full"
            layoutId="activeSection"
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </NextLink>
    </ListItem>
  );
};

export const Header = ({ path }: Props) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-5 z-20 lg:top-8"
    >
      <div className="relative my-5 w-full flex justify-center items-center lg:my-8">
        <Box
          component="nav"
          className="rounded-full py-3 px-2 backdrop-blur-sm text-sm"
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          <ul className="flex gap-5">
            {links.map(({ name, href }) => (
              <LinkItem name={name} href={href} />
            ))}
          </ul>
        </Box>
        <div className="absolute right-0">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};
