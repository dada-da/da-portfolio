'use client';

import { IconButton } from '@mui/material';
import { useTheme } from 'next-themes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex bg-grey hover:bg-grey-disabled"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <DarkModeIcon className="size-5 dark:hidden" />
      <LightModeIcon className="hidden !text-white size-5 dark:block" />
    </IconButton>
  );
};
