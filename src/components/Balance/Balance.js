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
    // Calculate total balance
    const totalBalance = transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

    // Dispatch action to update balance in the Redux store
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
