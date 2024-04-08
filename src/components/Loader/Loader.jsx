import { Background } from 'components/DesignContainer/DesignContainer.styled';
import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Background
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
        backgroundColor="#fff"
      />
    </Background>
  );
};

export default Loader;
