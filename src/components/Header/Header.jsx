import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
import Logout from '../../components/Logout/Logout';
import Modal from '../../components/Modal/Modal';
import { toggleLogOutModal } from '../../Redux/modal/modalSlice';
import { selectUser } from '../../Redux/authReducers/authSelectors';
import {
  selectModalState,
  selectModalTypeState,
} from '../../Redux/modal/selector';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);
  const buttonRef = useRef(null);

  const user = useSelector(selectUser);
  const username = user.email ? user.email.split('@')[0] : '';

  const goToHome = () => {
    navigate('/home');
  };
  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox onClick={goToHome} ref={buttonRef}>
            <Logo src={MoneyGuardLogo} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <Box>
            <Name>{username}</Name>
            <Stick />
            <ExitIconButton
              id="exit"
              type="button"
              onClick={() => dispatch(toggleLogOutModal())}
            >
              <ExitOutline />
              <ExitText>Exit</ExitText>
            </ExitIconButton>
          </Box>
        </HeaderDiv>
      </HeaderContainer>
      {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} />
      )}
    </Div>
  );
};
