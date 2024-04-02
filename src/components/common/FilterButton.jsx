import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Button } from './FilterButton.styled';

const FilterButton = ({ handleFilterData }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    handleFilterData(toggle);
  };
  return (
    <Button onClick={handleClick}>
      {toggle ? (
        <AiFillCaretDown size="18" fill="white" />
      ) : (
        <AiFillCaretUp size="18" fill="white" />
      )}
    </Button>
  );
};

export default FilterButton;
