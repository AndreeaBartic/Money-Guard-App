import React, { useEffect } from 'react';
import { Wrap, StyledTable, Graphics, Line } from './Currency.styled';
import { selectCurrency } from '../../Redux/currencyReducer/currencySelectors';
import { fetchCurrency } from '../../Redux/currencyReducer/currencyOperations';
import { useDispatch, useSelector } from 'react-redux';
import LoaderCurrency from '../Loader/LoaderCurrency';
import { OneHour } from './OneHour';

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCurrencyData = localStorage.getItem('persist:currency');
    const savedCurrencyObj = JSON.parse(savedCurrencyData);
    if (savedCurrencyObj.data !== 'null') {
      if (OneHour()) {
        dispatch(fetchCurrency());
      }
    } else {
      dispatch(fetchCurrency());
    }
  }, [dispatch]);

  const currency = useSelector(selectCurrency);
  return (
    <div>
      {!currency ? (
        <LoaderCurrency />
      ) : (
        <Wrap>
          <StyledTable>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD</td>
                <td>{currency.USD.buy.toFixed(2)}</td>
                <td>{currency.USD.sale.toFixed(2)}</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>{currency.EUR.buy.toFixed(2)}</td>
                <td>{currency.EUR.sale.toFixed(2)}</td>
              </tr>
            </tbody>
          </StyledTable>
          <Graphics>
            <span className="currency-value">
              {currency && currency.USD && currency.USD.buy.toFixed(2)}
            </span>
            <span className="currency-value">
              {currency && currency.EUR && currency.EUR.buy.toFixed(2)}
            </span>
          </Graphics>
          <Line />
        </Wrap>
      )}
    </div>
  );
};
