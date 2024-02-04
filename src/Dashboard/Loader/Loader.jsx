// Loader.jsx
import React from 'react';
import { connect } from 'react-redux';
import LoaderSpinner from 'react-loader-spinner';
import './Loader.scss';

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-overlay ${isLoading ? 'visible' : 'hidden'}`}>
      <LoaderSpinner type="Oval" color="#007bff" height={50} width={50} />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.global.isLoading,
});

export default connect(mapStateToProps)(Loader);
