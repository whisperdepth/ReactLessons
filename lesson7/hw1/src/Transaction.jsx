import React from 'React';
import moment from 'moment';
const formatter = new Intl.NumberFormat('en-GB', {
  style: 'decimal',
});

const Transaction = ({ transaction }) => {
  return (
    <li className='transaction'>
      <span className='transaction__date'>
        {moment(new Date(transaction.time)).format('D MMM')}
      </span>
      <span className='transaction__time'>
        {moment(new Date(transaction.time)).format('hh:mm')}
      </span>
      <span className='transaction__assets'>{`${transaction.from} → ${transaction.to}`}</span>
      <span className='transaction__rate'>{transaction.rate}</span>
      <span className='transaction__amount'>
        {formatter.format(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
