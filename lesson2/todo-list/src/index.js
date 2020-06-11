import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './list.css';

const rootElement = document.querySelector('#root');
const element = (
  <>
    <h1 className='title'>Todo List</h1>
    <main className='todo-list'>
      <div className='actions'>
        <input className='task-input'></input>
        <button className='btn create-taskbtn'></button>
      </div>
      <ul className='list'></ul>
    </main>
  </>
);

ReactDOM.render(element, rootElement);
