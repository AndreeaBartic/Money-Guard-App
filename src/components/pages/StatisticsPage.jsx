import { Container } from 'components/Container/Container';
import Title from '../Title/Title';
import {
  ChartBox,
  StatisticsPageStyledBox,
  TransactionBox,
} from 'components/Statistics/StatisticsPage.styled';
import ChartComponent from '../Chart/Chart';
import SelectComponent from '../Select/Select';
// import Transaction from 'components/Statistics/Transaction';
import React from 'react';

const StatisticsPage = () => {
  return (
    <Container size="statistics">
      <StatisticsPageStyledBox>
        <ChartBox>
          <Title>{'Statistics'}</Title>
          <ChartComponent />
        </ChartBox>
        <TransactionBox>
          <SelectComponent />
          {/* <Transaction /> */}
        </TransactionBox>
      </StatisticsPageStyledBox>
    </Container>
  );
};

export default StatisticsPage;
