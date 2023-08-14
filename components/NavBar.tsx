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
  MenuButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import LinkItem from './LinkItem';
import Logo from './Logo';

type Props = {
  path: string;
};

const NavBar = (props: Props) => {
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

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
        </Stack>
        <Box flex={1} alignContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={NextLink} href="/posts">
                  Posts
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
