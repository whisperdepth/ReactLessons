import React from 'react';

const NumbersList = ({ numbers }) => {
  const numbersElems = numbers.map((number) => <li key={number}>{number}</li>);

  return <ul>{numbersElems}</ul>;
};

export default NumbersList;
