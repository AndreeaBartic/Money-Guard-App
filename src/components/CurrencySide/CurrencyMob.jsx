import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Graphics, Line } from '../Sidebar/Sidebar.styled';
import CurrencySide from './CurrencySide';

function CurrencyMob() {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) navigate('/', { replace: true });
  });

  return (
    <>
      <CurrencySide />
      <Graphics />
      <Line />
    </>
  );
}

export default CurrencyMob;
