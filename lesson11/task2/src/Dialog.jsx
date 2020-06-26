import React from 'react';

const Dialog = ({ onClose, isOpen, children, title }) => {
    if(!isOpen) return null;
    return (
      <div className='dialog'>
        <div className='dialog__heading'>
          <div className='dialog__title'>{title}</div>
          <button onClick={onClose} className='dialog__close-btn'>
            +
          </button>
        </div>
        <div className='dialog__content'>{children}</div>
      </div>
    );
}

export default Dialog;