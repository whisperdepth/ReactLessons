import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

const rootElelment = document.querySelector('#root');

const renderSeconds = () => {
  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const color = seconds % 2 === 0 ? '#000' : '#fff';
  const style = { backgroundColor, color };

  const element = (
    <div className='seconds' style={style}>
      {seconds}
    </div>
  );

  ReactDom.render(element, rootElelment);
};



setInterval(() => renderSeconds(), 1000)