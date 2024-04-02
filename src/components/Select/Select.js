import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { SelectBox, customSelect } from './Select.styled';
import { useDispatch } from 'react-redux';
import { getStatistics } from '../../Redux/transactions/transactionsOperations';

const SelectComponent = () => {
  const dispatch = useDispatch();

  const optionsMonth = Array.from({ length: 12 }, (_, index) => ({
    value: String(index + 1),
    label: new Date(0, index).toLocaleString('default', { month: 'long' }),
  }));

  const optionsYear = Array.from({ length: 15 }, (_, index) => ({
    value: String(2024 - index),
    label: String(2024 - index),
  }));

  const [month, setMonth] = useState(String(new Date().getMonth() + 1));
  const [year, setYear] = useState(String(new Date().getFullYear()));

  useEffect(() => {
    dispatch(getStatistics({ month: Number(month), year: Number(year) }));
  }, [dispatch, month, year]);

  return (
    <SelectBox>
      <Select
        defaultValue={optionsMonth.find(option => option.value === month)}
        onChange={selectedOption => setMonth(selectedOption.value)}
        options={optionsMonth}
        styles={customSelect}
        isSearchable={false}
      />

      <Select
        defaultValue={optionsYear.find(option => option.value === year)}
        onChange={selectedOption => setYear(selectedOption.value)}
        options={optionsYear}
        styles={customSelect}
        isSearchable={false}
      />
    </SelectBox>
  );
};

export default SelectComponent;
