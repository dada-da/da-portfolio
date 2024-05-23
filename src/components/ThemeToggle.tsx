import { FC, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from 'next-themes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle: FC<{}> = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div></div>;

  return (
    <IconButton
      className={`h-8 !w-8 ${
        resolvedTheme === 'light'
          ? 'bg-purple hover:bg-purple-hover'
          : 'bg-yellow hover:bg-yellow-hover'
      }`}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'light' ? (
        <DarkModeIcon className="text-xl text-black" />
      ) : (
        <LightModeIcon className="text-xl text-white" />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
