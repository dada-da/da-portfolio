import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import NavBar from '../NavBar';

type Props = any;

const main = ({ children, router }: Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Da's portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default main;
