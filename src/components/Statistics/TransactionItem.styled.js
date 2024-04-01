import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  border-bottom: 1px solid var(--transparency-40);
  align-items: center;
  padding: 0 16px 15px 16px;
`;
export const ColorsItem = styled.p`
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
  border-radius: 2px;

  margin-right: 16px;
`;
export const NameItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--white);
`;
export const PriceItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--white);
  margin-left: auto;
`;
