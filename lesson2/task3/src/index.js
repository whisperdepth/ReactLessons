import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

const rootElelment = document.querySelector('#root');

const element = (
    <div>{17}</div>
);

ReactDom.render(element, rootElelment);
