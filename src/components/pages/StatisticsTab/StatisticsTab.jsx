import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchSummary } from 'redux/transactions/operations';
import { selectTransactionsObj } from '../../../Redux/transactions/';
import {
  Chart,
  StatisticsDashboard,
  StatisticsTable,
} from '../components/statistics';
import {
  DashboardWrapper,
  StatSection,
  StatsWrapper,
  StyledTitle,
} from './StatisticsTab.styled';
import { useMyContext } from 'context/useMyContext';
import { Modal } from '../components/Modal/Modal';
import { Logout } from '../components/dashboard/Logout/Logout';

const StatisticsTab = () => {
  const dispatch = useDispatch();

  const { isOpen, typeModal } = useMyContext();

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const { categories, summary } = useSelector(selectTransactionsObj);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSummary({ month, year }));
  }, [year, month, dispatch]);

  const onYearChange = val => {
    setYear(val.value);
  };
  const onMonthChange = val => {
    setMonth(val.value);
  };

  return (
    <StatSection>
      <StyledTitle>Statistics</StyledTitle>
      <StatsWrapper>
        <Chart categories={categories} statSummary={summary} />
        <DashboardWrapper>
          <StatisticsDashboard
            selectedYear={year}
            selectedMonth={month}
            changeYear={onYearChange}
            changeMonth={onMonthChange}
          />
          <StatisticsTable statSummary={summary} />
        </DashboardWrapper>
      </StatsWrapper>
      {isOpen ? <Modal>{typeModal === 'exit' ? <Logout /> : ''}</Modal> : null}
    </StatSection>
  );
};

export default StatisticsTab;
