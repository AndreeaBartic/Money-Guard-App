import { useSelector } from 'react-redux';
import {
  selectTransactions,
  selectExpenseSummary,
  selectIncomeSummary,
} from '../Redux/statistics/statisticsSelectors';

export const useTransaction = () => {
  const transactions = useSelector(selectTransactions);
  const summary = useSelector(selectExpenseSummary);
  const income = useSelector(selectIncomeSummary);

  return {
    transactions,
    summary,
    income,
  };
};
