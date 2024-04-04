import React from 'react';
// import { useMediaQuery } from 'react-responsive';

import { Container } from '../Container/Container';
import TransactionTable from '../TransactionTable/TransactionTable';
// import { TransactionCard } from '../pages/TransactionCardMobile/TransactionCard';
import ButtonAddTransactions from 'components/AddTrans/ButtonAddTransactions';
// const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

const Home = () => {
  // const MainComponent = isMobile ? TransactionCard : TransactionTable;

  return (
    <Container>
      <TransactionTable />
      <ButtonAddTransactions />
    </Container>
  );
};
export default Home;
