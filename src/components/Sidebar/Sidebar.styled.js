import styled from 'styled-components';

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  align-items: center;
  margin-top: 25px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 214px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 480px;
    align-items: unset;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 100px 100px 100px 0px;
  }
`;

export const MainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 481px;
  }
`;

export const UpperContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 32px 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    padding-bottom: 32px;
    width: 480px;
    height: 246px;
    margin: 0;
  }
`;

export const DownContainer = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--select-background-color);
  }

  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    height: 214px;
    background-color: var(--select-background-color);
    border-radius: 0 0 8px 8px;
    margin-top: 25px;
  }

  @media screen and (min-width: 1280px) {
    display: block !important;
    width: 480px;
    height: 360px;
    background-color: var(--select-background-color);
  }
`;
