import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Background, Container, DashboardPage } from './DesignContainer.styled';
import Home from 'components/pages/Home';

export const DesignContainer = () => {
  return (
    <Background>
      <Header />
      <Container>
        <DashboardPage>
          <Sidebar />
        </DashboardPage>
        <main>
          <Home />
        </main>
      </Container>
    </Background>
  );
};
