import { useEffect } from 'react';
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
// import { toggleEditModal } from '../../Redux/modal/modalSlice';

import { RotatingLines } from 'react-loader-spinner';
import { TransactionCard } from '../pages/TransactionCardMobile/TransactionCard';
import { transactionSlice } from '../../Redux/transactions/transactionsSlice';
import { fetchCategories } from '../../Redux/transactions/transactionsOperations';

import { ScrollToTopButton } from '../pages/ScrollToTopButton/ScrollToTopButton';
import EditTrans from './EditTrans';

const TransactionTable = () => {
  const {
    fetchTransactions,
    deleteItem,
  } = require('../../Redux/transactions/transactionsOperations');
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const isLoading = useSelector(selectIsLoading);

  const deleteTransactions = id => {
    dispatch(deleteItem(id)).then(() => {
      dispatch(fetchTransactions());
    });
  };

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch, fetchTransactions]);

  const allTransactions = useSelector(
    state => state[transactionSlice.name].transactions
  );

  const sortedTransactions = allTransactions
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const top5Transactions = sortedTransactions;
  const categories = useSelector(
    state => state[transactionSlice.name].categories
  );

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
                allTransactions.map(
                  ({
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    id,
                  }) => {

                    const transactionData = {
                      transactionDate,
                      type,
                      categoryId,
                      comment,
                      amount,
                      id,
                    };
                    const category =
                      categories.find(cat => cat.id === categoryId)?.name ||
                      'Categorie necunoscută';
                    let numberSign = '+';
                    let colorClassName = 'colorIncome';
                    if (type === 'EXPENSE') {
                      numberSign = '-';
                      colorClassName = 'colorExpense';
                    }

                    return (
                      <TableRow key={id} className="data">
                        <TableDataDate>{transactionDate}</TableDataDate>
                        <TableDataType>{numberSign}</TableDataType>
                        {type === 'INCOME' ? (
                          <TableData>Income</TableData>
                        ) : (
                          <TableDataCategory>
                            {categories.find(
                              category => category.id === categoryId
                            )?.name || 'Uncategorized'}
                          </TableDataCategory>
                        )}
                        <TableDataComment>{comment}</TableDataComment>

                        <TableDataColor type={type} className={colorClassName}>
                          {amount}
                        </TableDataColor>
                        <PencilButton>
                          <EditTrans transactionData={transactionData} />
                          <CustomButton
                            style={{}}
                            className="deleteItem"
                            onClick={() => {
                              deleteTransactions(id);
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
              categories={categories}
              handleEditClick={handleEditClick}
              deleteTransactions={deleteTransactions}
            />
          </>
        )}

        {/* {modalType === 'modal/toggleAddModal' && isModalOpen && (
          <Modal children={<AddTransaction />} />
        )}
        {modalType === 'modal/toggleEditModal' && isModalOpen && (
          <Modal children={<ModalAddTransaction id={id} />} />
        )}
        {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
          <Modal children={<Logout />} showCloseIcon={false} />
        )} */}
      </Container>
    </>
  );
};

export default TransactionTable;
