import {
  ColorSign,
  StyledCard,
  StyledCategory,
  StyledComment,
  StyledListCard,
  StyledPencil,
  StyledPencilEdit,
  StyledSpan,
  StyledText,
  StyledTypeOfField,
  StyledWrapperButtons,
} from './TransactionCard.styled';
import { CustomButton } from '../../../components/TransactionTable/TransactionTable.styled';
import { useState } from 'react';
import ModalAddTransactions from 'components/AddTrans/ModalAddTransactions';
const formatDate = date => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

export const TransactionCard = ({
  transactions,
  categories,

  deleteTransactions,
}) => {
  const getCategoryName = categoryId => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  console.log(isOpen, edit);
  const handleEditClick = () => {
    setIsOpen(true);
    setEdit(true);
  };
  return (
    <StyledListCard>
      {transactions.map(
        ({ transactionDate, type, categoryId, comment, amount, id }) => {
          const date = formatDate(transactionDate);
          const transactionData = {
            transactionDate: date,
            type,
            categoryId,
            comment,
            amount,
          };
          const numberSign =
            type === 'expense' || type === 'EXPENSE' ? '-' : '+';
          const categoryName = getCategoryName(categoryId);

          return (
            <StyledCard key={id} type={type}>
              <ul>
                <StyledTypeOfField>
                  <StyledText>Date</StyledText>
                  <StyledSpan>{date}</StyledSpan>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Type</StyledText>
                  <ColorSign type={type}>{numberSign}</ColorSign>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Category</StyledText>
                  <StyledCategory type={type}>
                    {type === 'INCOME' ? 'INCOME' : categoryName}
                  </StyledCategory>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Comment</StyledText>
                  <StyledComment>{comment}</StyledComment>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Sum</StyledText>
                  <ColorSign type={type}>{amount}</ColorSign>
                </StyledTypeOfField>
                <StyledWrapperButtons>
                  <li>
                    <CustomButton
                      onClick={() => {
                        deleteTransactions(id);
                      }}
                    >
                      Delete
                    </CustomButton>
                  </li>
                  <StyledPencilEdit>
                    <StyledPencil onClick={() => handleEditClick()} />
                    Edit
                    {isOpen && (
                      <ModalAddTransactions
                        transactionData={transactionData}
                        edit={edit}
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                      />
                    )}
                  </StyledPencilEdit>
                </StyledWrapperButtons>
              </ul>
            </StyledCard>
          );
        }
      )}
    </StyledListCard>
  );
};
