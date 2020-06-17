import React from 'react';

const Spinner = ({ size }) => {
  const style = {
    display: 'inline-block',
    border: `${size}px solid #ccc`,
    borderLeftColor: 'transparent',
    animation: 'spin .5s infinite linear',
    borderRadius: '50%',
  };
  return <span style={style} className='spinner'></span>;
};

export default Spinner;
