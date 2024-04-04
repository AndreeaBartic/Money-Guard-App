import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance } from '../../Redux/balance/balanceSlice';
import { selectorTransactions } from '../../Redux/transactions/transactionsSelectors';
import { selectorBalance } from '../../Redux/balance/balanceSelectors';
import { BalanceStyled, Text, Line, Symbol, Total } from './Balance.styled';

export const Balance = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectorTransactions);
  const balance = useSelector(selectorBalance);

  useEffect(() => {
    const totalBalance = transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

    dispatch(setBalance(totalBalance));
  }, [dispatch, transactions]);

  return (
    <BalanceStyled>
      <Text>Your balance</Text>
      <Line>
        <Symbol>₴</Symbol>
        <Total>{balance}</Total>
      </Line>
    </BalanceStyled>
  );
};
