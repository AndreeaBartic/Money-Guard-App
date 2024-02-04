import { useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import {
  Div,
  HeaderDiv,
  Box,
  ExitOutline,
  ExitIconButton,
  ExitText,
  HeaderContainer,
  Logo,
  LogoBox,
  LogoName,
  Name,
  Stick,
} from './Header.styled';
import MoneyGuardLogo from '../../images/svg/logo.svg';

export const Header = () => {
  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox>
            <Logo src={MoneyGuardLogo} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <Box>
            <Name>email</Name>
            <Stick />
            <ExitIconButton id="exit" type="button">
              <ExitOutline />
              <ExitText>Exit</ExitText>
            </ExitIconButton>
          </Box>
        </HeaderDiv>
      </HeaderContainer>
    </Div>
  );
};
