import { DesignContainer } from 'components/DesignContainer/DesignContainer';
import { Container } from '../Container/Container';

import React from 'react';

const Home = () => {
  return (
    <Container>
      <DesignContainer />
      <ButtonAddTransactions />
    </Container>
  );
};

export default Home;
