import Head from 'next/head';
import { FC } from 'react';
import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

import '../src/styles/globals.css';
import PageProvider from '../src/components/helpers/PageProvider';

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <Head>
      <title>Da&apos;s portfolio</title>
    </Head>
    <Component {...pageProps} />
  </PageProvider>
);

export default App;
