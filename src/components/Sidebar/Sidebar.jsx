import {
  SidebarStyled,
  MainContainer,
  DownContainer,
  Graphics,
  Line,
} from './Sidebar.styled';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Balance } from '../Balance/Balance';
import CurrencySide from '../CurrencySide/CurrencySide';
import CurrencyMob from '../CurrencySide/CurrencyMob';

import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const Sidebar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  const currencyActive = location.pathname.includes('/currency');
  const homeActive = location.pathname.includes('/home');
  const values = JSON.parse(localStorage.getItem('currency'))?.map(
    el => el.buy
  ) || [0, 0];

  return !isMobile ? (
    <SidebarStyled>
      <NavigationBar />
      <Balance />
      <CurrencySide />
      <Graphics>
        <span className="currency-value">{values[0]}</span>
        <span className="currency-value">{values[1]}</span>
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
