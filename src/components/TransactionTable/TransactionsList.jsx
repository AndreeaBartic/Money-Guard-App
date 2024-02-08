import { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  delTransactionThunk,
  fetchAllTransactionsThunk,
  getTransactionCategoriesThunk,
} from 'redux/finance/financeThunks';
import { useMediaQuery } from 'react-responsive';
import { TransactionListMobile } from './TransactionListMobile/TransactionListMobile';
import { TransactionListTable } from './TransactionListTable/TransactionListTable';
import { selectAllTransactions, selectCategories } from 'redux/selectors';
import { TransactionWrapper } from './TransactionsList.styled';
import { refreshUserBalance } from 'redux/auth/AuthThunk';
import { useModal } from 'components/ModalContext/ModalContext';

const TransactionsList = () => {
  const { modalOpen } = useModal();
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(getTransactionCategoriesThunk());
  }, [dispatch]);

  const defineCategory = id =>
    categories?.find(category => category.id === id).name;

  const onDelete = transactionId => {
    dispatch(delTransactionThunk(transactionId))
      .unwrap()
      .then(() => dispatch(refreshUserBalance()));
  };

  return (
    <>
      <TransactionWrapper>
        {transactions?.length > 0 ? (
          isMobile ? (
            <TransactionListMobile
              transactions={transactions}
              defineCategory={defineCategory}
              handleDelete={onDelete}
            />
          ) : (
            <TransactionListTable
              transactions={transactions}
              defineCategory={defineCategory}
              handleDelete={onDelete}
            ></TransactionListTable>
          )
        ) : null}
        <button
          className="transaction-add-button"
          onClick={() => modalOpen('add')}
        >
          <AiOutlinePlus />
        </button>
      </TransactionWrapper>
    </>
  );
};

export default TransactionsList;
