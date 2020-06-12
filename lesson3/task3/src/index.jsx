import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

const author = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u10001',
};

ReactDOM.render(
  <Comment author={author} text='Good job!' date={new Date()} />,
  rootElement
);
