import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HumburgerIcon } from '@chakra-ui/icons';

import Logo from './Logo';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack direction={{ base: 'column', md: 'row' }}></Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
