import Link from 'next/link';

import ThemeToggle from '../components/ThemeToggle';
import { Box } from '@mui/material';

export default function Header({}) {
  return (
    <header className="sticky top-0 z-20 container">
      <div className="relative my-5 w-full flex justify-center items-center lg:my-8">
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
          className="flex w-fit px-4 py-2 gap-5 items-center justify-center rounded-full"
        >
          <Link href="#about" passHref>
            <button className="linkItem">About</button>
          </Link>
          <Link href="#experience" passHref>
            <button className="linkItem">Experience</button>
          </Link>
          <Link href="#skills" passHref>
            <button className="linkItem active">Skills</button>
          </Link>
          <Link href="#projects" passHref>
            <button className="linkItem">Projects</button>
          </Link>
        </Box>
        <div className="absolute right-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
