import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Graphics, Line } from '../../Sidebar/Sidebar.styled';
import { Background } from '../../DesignContainer/DesignContainer.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

function CurrencyPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) navigate('/', { replace: true });
  });

  return (
    <Background>
      <Sidebar />
      <Graphics />
      <Line />
    </Background>
  );
}
export default CurrencyPage;
