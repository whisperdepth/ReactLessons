import React from 'react';

const Online = ({ onBtnClick }) => {
  return (
    <div className="status">
      <span className='status__text'>Offline</span>
      <button className='status__btn'>
        Reconnect
      </button>
    </div>
  );
};

export default Online;
