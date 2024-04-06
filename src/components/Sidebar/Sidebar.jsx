import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

import { SidebarStyled, ContentWrapper } from './Sidebar.styled';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Balance } from '../Balance/Balance';
import { Currency } from '../Currency/Currency';

export const Sidebar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  const currencyActive = location.pathname.includes('/currency');
  const homeActive = location.pathname.includes('/home');

  return !isMobile ? (
    <SidebarStyled>
      <ContentWrapper>
        <NavigationBar />
        <Balance />
      </ContentWrapper>
      <Currency />
    </SidebarStyled>
  ) : (
    <SidebarStyled>
      <NavigationBar />
      {homeActive && <Balance />}
      {currencyActive && <Currency />}
    </SidebarStyled>
  );
};
