import React from 'React';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'decimal',
  });

  return (
    <li className='transaction'>
      <span className='transaction__date'>
        {moment(new Date(time)).format('D MMM')}
      </span>
      <span className='transaction__time'>
        {moment(new Date(time)).format('hh:mm')}
      </span>
      <span className='transaction__assets'>{`${from} → ${to}`}</span>
      <span className='transaction__rate'>{rate}</span>
      <span className='transaction__amount'>{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;