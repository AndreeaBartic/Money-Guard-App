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
    const totalSum = transactions.reduce((sumValue, transaction) => {
      let numberValue = parseFloat(transaction.value);
      let numberSign = -1;
      if (transaction.type === 'INCOME') {
        numberSign = 1;
      }
      return sumValue + numberSign * numberValue;
    }, 0);
    dispatch(setBalance(totalSum));
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
