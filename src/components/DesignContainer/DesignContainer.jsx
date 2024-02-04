import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Balance } from '../Balance/Balance';
import CurrencySide from '../CurrencySide/CurrencySide';
import { TransactionTable } from '../TransactionTable/TransactionTable';
import { Sidebar } from '../Sidebar/Sidebar';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Suspense } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Background,
  Container,
  DashboardPage,
  NavBlockWrapper,
} from './DesignContainer.styled';

export const DesignContainer = () => {
  return (
    <Background>
      <Header />
      <Container>
        <DashboardPage>
          <Sidebar />
        </DashboardPage>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <NavBlockWrapper>
          <TransactionTable />
        </NavBlockWrapper>
      </Container>
    </Background>
  );
};
