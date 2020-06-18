import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  const transactionsElems = transactions.map((transaction) => 
    <Transaction key={transaction.id} {...transaction} />
  );
  return <ul className='transactions'>{transactionsElems}</ul>;
};

export default TransactionsList;
