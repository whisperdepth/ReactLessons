import React from 'react';

const Dialog = ({ hideDialog, isOpened, children, title }) => {
    if(!isOpened) return null;
    return (
      <div className='dialog'>
        <div className='dialog__heading'>
          <div className='dialog__title'>{title}</div>
          <button onClick={hideDialog} className='dialog__close-btn'>
            +
          </button>
        </div>
        <div className='dialog__content'>{children}</div>
      </div>
    );
}

export default Dialog;