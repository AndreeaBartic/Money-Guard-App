import { SidebarStyled, Graphics, Line } from './Sidebar.styled';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Balance } from '../Balance/Balance';
import { Currency } from '../Currency/Currency';
import CurrencyMob from '../../components/pages/CurrencyMob/CurrencyMobile';
import { selectCurrency } from '../../Redux/currencyReducer/currencySelectors';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const Sidebar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const currency = useSelector(selectCurrency);

  const currencyActive = location.pathname.includes('/currency');
  const homeActive = location.pathname.includes('/home');

  return !isMobile ? (
    <SidebarStyled>
      <NavigationBar />
      <Balance />
      <Currency />
      <Graphics>
        <span className="currency-value">{currency.USD.buy.toFixed(2)}</span>
        <span className="currency-value">{currency.EUR.buy.toFixed(2)}</span>
      </Graphics>
      <Line />
    </SidebarStyled>
  ) : (
    <SidebarStyled>
      <NavigationBar />
      {homeActive && <Balance />}
      {currencyActive && <CurrencyMob />}
    </SidebarStyled>
  );
};
