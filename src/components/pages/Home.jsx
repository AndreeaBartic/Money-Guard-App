import { Container } from '../Container/Container';
import TransactionTable from '../TransactionTable/TransactionTable';
import ButtonAddTransactions from 'components/AddTrans/ButtonAddTransactions';

const Home = () => {
  return (
    <Container>
      <TransactionTable />
      <ButtonAddTransactions />
    </Container>
  );
};
export default Home;
