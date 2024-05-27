import Head from 'next/head';
import { FC } from 'react';
import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

import '../src/styles/globals.css';
import PageProvider from '../src/components/helpers/pageProvider';

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({
  Component,
  pageProps,
  emotionCache,
  router,
}) => (
  <PageProvider emotionCache={emotionCache}>
    <Head>
      <title>Da&apos;s portfolio</title>
    </Head>
    <Component {...pageProps} router={router} />
  </PageProvider>
);

export default App;
