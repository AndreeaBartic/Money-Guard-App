import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
  );
};

export default Loader;
