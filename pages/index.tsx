import { Router } from 'next/router';

import { Hero } from '@/components/hero';
import { Header } from '@/layout/header';
import Container from '@mui/material/Container';

type Props = {
  router: Router;
};

const Home = ({ router }: Props) => {
  return (
    <Container component="main" maxWidth="md">
      <Header path={router.asPath} />
      <Hero />
    </Container>
  );
};

export default Home;
