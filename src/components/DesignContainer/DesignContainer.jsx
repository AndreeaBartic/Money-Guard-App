import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import TransactionTable from '../TransactionTable/TransactionTable';
import { Sidebar } from '../Sidebar/Sidebar';
import { TransactionCard } from '../../components/pages/TransactionCardMobile/TransactionCard';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Background,
  Container,
  DashboardPage,
  NavBlockWrapper,
} from './DesignContainer.styled';
import { useMediaQuery } from 'react-responsive';

export const DesignContainer = () => {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  const MainComponent = isMobile ? TransactionCard : TransactionTable;

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
          <MainComponent />
        </NavBlockWrapper>
      </Container>
    </Background>
  );
};
