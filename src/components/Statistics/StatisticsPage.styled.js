import styled from 'styled-components';

export const StatisticsPageStyledBox = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
  @media (min-width: 1280) {
    width: 100%;
    flex-direction: row;
  }
`;

export const ChartBox = styled.div`
  width: 280px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 336px;
    margin-right: 32px;
  }
  @media screen and (min-width: 1268px) {
    margin-left: 0;
    width: 288px;
  }
`;

export const TransactionBox = styled.div`
  @media (min-width: 768px) {
    width: 336px;
    padding-top: 40px;
  }
`;
