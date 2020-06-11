import React from 'react';
import ReactDom from 'react-dom';

const rootElelment = document.querySelector('#root');

const element =(
    <>
        <input type="text"></input>
        <button>Search</button>
    </>
)

ReactDom.render(element, rootElelment);