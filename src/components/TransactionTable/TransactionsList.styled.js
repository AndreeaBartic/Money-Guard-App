import styled from 'styled-components';

export const TransactionWrapper = styled.div`
  .transaction-add-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background: var(--btn-gradient-color);
    color: var(--white);
    width: 44px;
    height: 44px;
    box-shadow: 1px 9px 15px 0px var(--transparency-20);
    &:hover,
    &:focus {
      background: var(--btn-hover-gradient);
    }
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
