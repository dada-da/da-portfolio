import React, { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Main from '../components/layouts/main';

type Props = any;

const Website = ({ Component, pageProps, router }: Props) => {
  return (
    <ChakraProvider>
      <Main router={router}>
        <Component {...pageProps} key={router.key} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;
