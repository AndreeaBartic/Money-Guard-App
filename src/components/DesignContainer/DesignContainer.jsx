import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Sidebar } from '../Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Container, DashboardPage } from './DesignContainer.styled';

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
      </Container>
    </Background>
  );
};
