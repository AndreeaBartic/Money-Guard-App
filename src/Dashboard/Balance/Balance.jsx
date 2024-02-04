// Balance.jsx
import React from 'react';
import { connect } from 'react-redux';
import './Balance.scss';

const Balance = ({ totalBalance }) => {
  return (
    <div className="balance-container">
      <h3 className="balance-title">Total Balance</h3>
      <div className="balance-amount">${totalBalance.toFixed(2)}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  totalBalance: state.finance.totalBalance,
});

export default connect(mapStateToProps)(Balance);
