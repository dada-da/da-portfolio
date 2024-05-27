import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import Head from 'next/head';
import { FC } from 'react';

import {
  ActiveSectionContext,
  useActiveSectionProvider,
} from '@/hooks/useActiveSection';
import createEmotionCache from '../../theme/createEmotionCache';
import MUIThemeProvider from './MUIThemeProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionProvider();

  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <MUIThemeProvider>
          <ActiveSectionContext.Provider
            value={{
              activeSection,
              setActiveSection,
              timeOfLastClick,
              setTimeOfLastClick,
            }}
          >
            {children}
          </ActiveSectionContext.Provider>
        </MUIThemeProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
};

export default PageProvider;
