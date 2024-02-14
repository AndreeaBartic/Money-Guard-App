import { DesignContainer } from 'components/DesignContainer/DesignContainer';
import React from 'react';
import { Container } from '../Container/Container';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

const Home = () => {
  return (
    <Container>
      <DesignContainer />
      <ButtonAddTransactions />
    </Container>
  );
};
export default Home;
