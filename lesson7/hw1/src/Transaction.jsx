import React from 'React';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB', {
  style: 'decimal',
});

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className='transaction'>
      <span className='transaction__date'>
        {moment(new Date(time)).format('D MMM')}
      </span>
      <span className='transaction__time'>
        {moment(new Date(time)).format('HH:MM')}
      </span>
      <span className='transaction__assets'>{`${from} → ${to}`}</span>
      <span className='transaction__rate'>{rate}</span>
      <span className='transaction__amount'>{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
