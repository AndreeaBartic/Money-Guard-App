import {
  ContainerHeader,
  TableStyle,
  WrapperButtons,
  ButtonDelete,
  PencilEdit,
  Pencil,
} from './TransactionTable.styled';

const formatDate = date => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};
const testTransactions = [
  {
    _id: '1',
    createdAt: '2022-01-01T12:00:00Z',
    type: '+',
    category: 'Salary',
    comment: 'Monthly salary',
    value: 2000,
  },
];

export const TransactionTable = ({
  transactions = testTransactions,
  handleEditClick,
  deleteTransactions,
}) => {
  return (
    <ContainerHeader>
      <TableStyle>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ createdAt, type, category, comment, value, _id }) => {
              const date = formatDate(createdAt);
              const numberSign = type === 'expense' ? '-' : '+';

              return (
                <tr key={_id} type={type}>
                  <td>{date}</td>
                  <td>{type}</td>
                  <td>{type === 'income' ? 'Income' : category}</td>
                  <td>{comment}</td>
                  <td>
                    {numberSign}
                    {value}
                  </td>
                  <td>
                    <WrapperButtons>
                      <ButtonDelete
                        onClick={() => {
                          deleteTransactions(_id);
                        }}
                      >
                        Delete
                      </ButtonDelete>

                      <PencilEdit>
                        <Pencil onClick={() => handleEditClick(_id)} />
                        Edit
                      </PencilEdit>
                    </WrapperButtons>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </TableStyle>
    </ContainerHeader>
  );
};
