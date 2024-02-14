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
  PencilEdit,
  Pencil,
  // AddButton,
} from './TransactionTable.styled';
import { selectIsLoading } from '../../Redux/transactions/transactionsSelectors';
import Modal from '../../components/Modal/Modal';
import AddTransaction from '../../components/FormAddTransactions';
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
  const sortedTransactions = allTransactions
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const top5Transactions = sortedTransactions.slice(0, 5);

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
                          <TableDataCategory>
                            {categoryId.name}
                          </TableDataCategory>
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
      <PencilEdit>
        <Pencil onClick={() => handleEditClick()} />
        Edit
      </PencilEdit>
    </>
  );
};

export default TransactionTable;

// import {
//   ContainerHeader,
//   TableStyle,
//   WrapperButtons,
//   ButtonDelete,
//   PencilEdit,
//   Pencil,
//   // TransactionWrapper,
// } from './TransactionTable.styled';

// const formatDate = date => {
//   const d = new Date(date);
//   const day = d.getDate().toString().padStart(2, '0');
//   const month = (d.getMonth() + 1).toString().padStart(2, '0');
//   const year = d.getFullYear();
//   return `${day}.${month}.${year}`;
// };

// export const TransactionTable = ({
//   transactions,
//   handleEditClick,
//   deleteTransactions,
// }) => {
//   return (
//     <ContainerHeader>
//       <TableStyle>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Comment</th>
//             <th>Sum</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions?.map(
//             ({ createdAt, type, category, comment, value, _id }) => {
//               let date = new Date(createdAt).toLocaleDateString();
//               let numberSign = '+';
//               let colorClassName = 'colorIncome';
//               if (type === 'expense') {
//                 numberSign = '-';
//                 colorClassName = 'colorExpense';
//               }

//               return (
//                 <tr key={_id} type={type}>
//                   <td>{date}</td>
//                   <td>{type}</td>
//                   <td>{type === 'income' ? 'Income' : category}</td>
//                   <td>{comment}</td>
//                   <td>
//                     {numberSign}
//                     {value}
//                   </td>
//                   <td>
//                     <WrapperButtons>
//                       <ButtonDelete
//                         onClick={() => {
//                           deleteTransactions(_id);
//                         }}
//                       >
//                         Delete
//                       </ButtonDelete>

//                       <PencilEdit>
//                         <Pencil onClick={() => handleEditClick(_id)} />
//                         Edit
//                       </PencilEdit>
//                     </WrapperButtons>
//                   </td>
//                 </tr>
//               );
//             }
//           )}
//         </tbody>
//       </TableStyle>
//     </ContainerHeader>
//   );
// };
