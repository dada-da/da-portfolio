import { PropsWithChildren } from 'react';

import { ActiveSectionProvider } from '@/components/helpers/ActiveSectionProvider';
import { ThemeProvider } from '@/components/helpers/ThemeProvider';

import { fontsMplus } from '@/lib/fonts';
import '../styles/globals.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${fontsMplus.variable}`}>
      <body>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
