import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  HeaderTitle,
  HeaderTransaction,
  SumTitleList,
  SumTitleItem,
  TransactionList,
  Total,
} from './Transactions.styled';
import { colorStatistics } from '../Chart/Chart';
import TransactionItem from '../Statistics/TransactionItem';
import { useTransaction } from '../../utils/useTransaction';
import FilterButton from '../common/FilterButton';

const Transaction = () => {
  const { transactions, summary, income } = useTransaction();
  const [data, setData] = useState(transactions);
  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  const handleFilterData = toggle => {
    const x = [...data];
    let newData;
    if (toggle) {
      newData = x.sort(
        (first, second) => Math.abs(first.total) - Math.abs(second.total)
      );
    } else {
      newData = x.sort(
        (first, second) => Math.abs(second.total) - Math.abs(first.total)
      );
    }

    setData(newData);
  };
  return (
    <>
      <HeaderTransaction>
        <HeaderTitle>{'category'}</HeaderTitle>
        <FilterButton handleFilterData={handleFilterData} />
        <HeaderTitle>{'sum'}</HeaderTitle>
      </HeaderTransaction>
      <TransactionList>
        {data
          ?.filter(item => item.name !== 'Income')
          .map(item => {
            const color =
              colorStatistics.find(category => category.name === item.name)
                ?.color || '';
            return <TransactionItem key={nanoid()} color={color} item={item} />;
          })}
      </TransactionList>
      <SumTitleList>
        <SumTitleItem>
          <p>{'Expenses'}:</p>
          <Total className="expense">{Math.abs(summary).toFixed(2)}</Total>
        </SumTitleItem>
        <SumTitleItem>
          <p>{'Income'}:</p>
          <Total className="income">{Math.abs(income).toFixed(2)}</Total>
        </SumTitleItem>
      </SumTitleList>
    </>
  );
};

export default Transaction;
