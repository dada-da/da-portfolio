import React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';

type Props = {};

const Page = (props: Props) => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello I'm Web developer base in Hanoi!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Da-da
          </Heading>
          <p>Front-end developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
