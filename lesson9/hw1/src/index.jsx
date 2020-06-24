import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersLIst from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: '1',
    name: 'Tom',
    age: 20,
  },
  {
    id: '2',
    name: 'Bob',
    age: 30,
  },
  {
    id: '3',
    name: 'Sam',
    age: 40,
  },
  {
    id: '4',
    name: 'Tad',
    age: 26,
  },
  {
    id: '5',
    name: 'Tom',
    age: 20,
  },
  {
    id: '6',
    name: 'Bob',
    age: 30,
  },
  {
    id: '7',
    name: 'Sam',
    age: 40,
  },
  {
    id: '8',
    name: 'Tad',
    age: 26,
  },
];



ReactDOM.render(<UsersLIst users={users} />, rootElement);
