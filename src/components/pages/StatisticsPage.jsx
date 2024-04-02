import React from 'react';

import { Container } from 'components/Container/Container';
import {
  ChartBox,
  StatisticsPageStyledBox,
  TransactionBox,
} from 'components/Statistics/StatisticsPage.styled';
import Title from '../Title/Title';
import ChartComponent from '../Chart/Chart';
import SelectComponent from '../Select/Select';
import Transaction from '../Statistics/Transactions';
import { useTransaction } from '../../utils/useTransaction';

const StatisticsPage = () => {
  const { transactions } = useTransaction();

  return (
    <Container size="statistics">
      <StatisticsPageStyledBox>
        <ChartBox>
          <Title>{'Statistics'}</Title>
          <ChartComponent transactions={transactions} />
        </ChartBox>
        <TransactionBox>
          <SelectComponent />
          <Transaction />
        </TransactionBox>
      </StatisticsPageStyledBox>
    </Container>
  );
};

export default StatisticsPage;
