import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BalanceStyled, Text, Line, Symbol, Total } from './Balance.styled';

export const Balance = () => {
  return (
    <BalanceStyled>
      <Text>Your balance</Text>
      <Line>
        <Symbol>₴</Symbol>
        <Total>0000</Total>
      </Line>
    </BalanceStyled>
  );
};
