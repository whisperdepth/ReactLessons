import React from 'react';

const Online = ({ onBtnClick }) => {
  return (
    <>
      <span className='status__text'>Offline</span>
      <button onClick={onBtnClick} className='status__btn'>
        Reconnect
      </button>
    </>
  );
};

export default Online;
