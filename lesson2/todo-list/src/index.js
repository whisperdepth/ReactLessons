import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './list.css';

const rootElement = document.querySelector('#root');
const element = (
  <>
    <h1 className='title'></h1>
    <main className='todoList'>
      <div className='actions'>
        <input className='taskInput'></input>
        <button className='btn createTaskBtn'></button>
      </div>
      <ul className='list'></ul>
    </main>
  </>
);

ReactDOM.render(element, rootElement);
