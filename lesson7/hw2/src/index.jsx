import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },

  {
    id: 'id-4',
    age: 31,
    name: 'Blob',
  },
  {
    id: 'id-5',
    age: 74,
    name: 'Toms',
  },
  {
    id: 'id-6',
    age: 108,
    name: 'Tado',
  },
  {
    id: 'id-7',
    age: 15,
    name: 'Sami',
  },

  {
    id: 'id-8',
    age: 95,
    name: 'Samg',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
