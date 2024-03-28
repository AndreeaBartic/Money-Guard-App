import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '../Container/Container';
import TransactionTable from '../TransactionTable/TransactionTable';
import TransactionCard from '../../components/pages/TransactionCardMobile/TransactionCard';
import ButtonAddTransactions from 'components/AddTrans/ButtonAddTransactions';

const Home = () => {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const MainComponent = isMobile ? TransactionCard : TransactionTable;

  return (
    <Container>
      <MainComponent />
      <ButtonAddTransactions />
    </Container>
  );
};
export default Home;
