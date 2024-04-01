import styled from 'styled-components';

export const HeaderTransaction = styled.div`
  width: 280px;
  padding: 16px 16px;

  margin: 20px auto 14px;

  border-radius: 8px;
  background: var(--background-table);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 396px;
  }
`;
export const HeaderTitle = styled.p`
  font-size: 16px;
  color: var(--white);
  font-weight: 600;
`;
export const SumTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 396px;
  }
`;
export const TransactionList = styled.ul`
  width: 280px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 396px;
  }
`;
export const SumTitleItem = styled.li`
  padding: 0 16px;
  display: flex;
  font-weight: 600;
  color: var(--white);
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 19px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Total = styled.p`
  &.income {
    color: var(--yellow);
  }

  &.expense {
    color: var(--dashboard-text);
  }
`;
