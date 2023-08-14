import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

type Props = {
  path: string;
  href: string;
  children: JSX.Element | JSX.Element[] | string;
  target?: string;
};

const LinkItem = ({ href, path, children, target }: Props) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
