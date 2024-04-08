import styled from 'styled-components';

export const TitleStyle = styled.h1`
  color: var(--white);
  font-size: 30px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    padding-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 14px;
  }
`;
