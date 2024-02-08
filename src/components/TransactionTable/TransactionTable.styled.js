import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';

export const ContainerHeader = styled.div`
  width: 704px;
  height: 56px;
  border-radius: 8px;
  margin: 40px 0 0 69px;

  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 67px;
  }
`;
export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  color: var(--white);
  thead {
    width: 100%;

    backdrop-filter: blur(50px);
    border-radius: 8px;
    tr {
      width: 704px;
    }
    tr > th:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      padding-left: 20px;
    }
    tr > th:nth-child(2) {
      text-align: center;
    }
    tr > th:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    th {
      background: var(--background-table);
      padding-block: 16px;
      text-align: left;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }
  tbody {
    tr > td {
      padding-block: 16px;
      text-align: left;
      font-size: 14px;
      line-height: 21px;
    }
    tr > td:nth-child(5) {
      font-weight: 600;
    }
    tr > td:nth-child(2),
    tr > td:first-child {
      text-align: center;
    }
    tr:not(:last-child) {
      border-bottom: 1px solid var(--transparency-20);
    }
    td > div {
      .delete-button {
        padding: 4px 12px;
        border-radius: 18px;
        background: var(--btn-gradient-color);
        box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
        border: none;
        color: var(--white-color);
        text-align: center;
        font-size: 14px;
        line-height: normal;
        &:hover,
        &:focus {
        background: var(--btn-hover-gradient);
        }
      }
      .edit-button {
        padding: 4px 12px;
        background: transparent;
        border: none;
        text-align: center;
        color: var(--transparency-60);
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
        &:hover,
        &:focus {
          svg{
            fill: var(--white-color);
          }
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    tbody {
        tr>td:first-child: text-align: center;
    }
  }
`;
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;
export const ButtonDelete = styled(AiOutlinePlus)`
  && {
    margin: 0;
    width: 69px;
    height: 29px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export const PencilEdit = styled.li`
  display: flex;
  align-items: center;
  color: #c2b1d6;
  cursor: pointer;
`;

export const Pencil = styled(BiPencil)`
  && {
    margin-right: 5px;
  }
`;
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
