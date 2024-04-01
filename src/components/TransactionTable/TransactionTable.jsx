import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  ContainerHeader,
  TableHead,
  Data,
  TableRow,
  TableDataDate,
  TableDataType,
  TableData,
  TableDataCategory,
  TableDataComment,
  TableDataColor,
  PencilButton,
  CustomButton,
} from './TransactionTable.styled';
import { selectIsLoading } from '../../Redux/transactions/transactionsSelectors';
import Modal from '../../components/Modal/Modal';
import AddTransaction from '../../components/AddTrans/FormAddTransactions';
import EditTransaction from '../../components/Edit/Edit';
import Logout from '../../components/Logout/Logout';
import { toggleEditModal } from '../../Redux/modal/modalSlice';
import {
  selectModalState,
  selectModalTypeState,
} from '../../Redux/modal/selector';
import { BiPencil } from 'react-icons/bi';
import { RotatingLines } from 'react-loader-spinner';
import { TransactionCard } from '../pages/TransactionCardMobile/TransactionCard';
import { transactionSlice } from '../../Redux/transactions/transactionsSlice';
import { ScrollToTopButton } from '../pages/ScrollToTopButton/ScrollToTopButton';

const TransactionTable = () => {
  const {
    fetchTransactions,
    deleteItem,
  } = require('../../Redux/transactions/transactionsOperations');
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const isLoading = useSelector(selectIsLoading);

  const deleteTransactions = id => {
    dispatch(deleteItem(id)).then(() => {
      dispatch(fetchTransactions());
    });
  };

  const handleEditClick = id => {
    setId(id);
    dispatch(toggleEditModal());
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  const allTransactions = useSelector(
    state => state[transactionSlice.name].transactions
  );
  console.log(allTransactions);
  const sortedTransactions = allTransactions
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const top5Transactions = sortedTransactions.slice(0, 5);
  const categories = JSON.parse(localStorage.getItem('categories')) ?? [];
  console.log(categories);
  return (
    <>
      <Container>
        {!isMobile ? (
          <ContainerHeader>
            <TableHead>
              <div>Date</div>
              <div>Type</div>
              <div>Category</div>
              <div>Comment</div>
              <div>Sum</div>
            </TableHead>
            <Data>
              {isLoading ? (
                <TableRow>
                  <div>
                    <RotatingLines visible={true} height="80" width="80" />
                  </div>
                </TableRow>
              ) : (
                top5Transactions.map(
                  ({
                    transactionDate,
                    // createdAt,
                    type,
                    categoryId,
                    comment,
                    amount,
                    _id,
                  }) => {
                    const category =
                      categories.find(cat => cat.id === categoryId)?.name ||
                      'Categorie necunoscută';
                    // let date = new Date(createdAt).toLocaleDateString();
                    let numberSign = '+';
                    let colorClassName = 'colorIncome';
                    if (type === 'expense') {
                      numberSign = '-';
                      colorClassName = 'colorExpense';
                    }
                    return (
                      <TableRow key={_id} className="data">
                        <TableDataDate>{transactionDate}</TableDataDate>
                        <TableDataType>{numberSign}</TableDataType>
                        {type === 'income' ? (
                          <TableData>Income</TableData>
                        ) : (
                          <TableDataCategory>{category}</TableDataCategory>
                        )}
                        <TableDataComment>{comment}</TableDataComment>

                        <TableDataColor type={type} className={colorClassName}>
                          {amount}
                        </TableDataColor>
                        <PencilButton>
                          <BiPencil onClick={() => handleEditClick(_id)} />
                          <CustomButton
                            style={{}}
                            className="deleteItem"
                            onClick={() => {
                              deleteTransactions(_id);
                            }}
                          >
                            Delete
                          </CustomButton>
                        </PencilButton>
                      </TableRow>
                    );
                  }
                )
              )}
            </Data>
          </ContainerHeader>
        ) : (
          // Render Cards
          <>
            <ScrollToTopButton />
            <TransactionCard
              transactions={top5Transactions}
              handleEditClick={handleEditClick}
              deleteTransactions={deleteTransactions}
            />
          </>
        )}

        {modalType === 'modal/toggleAddModal' && isModalOpen && (
          <Modal children={<AddTransaction />} />
        )}
        {modalType === 'modal/toggleEditModal' && isModalOpen && (
          <Modal children={<EditTransaction id={id} />} />
        )}
        {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
          <Modal children={<Logout />} showCloseIcon={false} />
        )}
      </Container>
    </>
  );
};

export default TransactionTable;
