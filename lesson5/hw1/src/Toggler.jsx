import React from 'react';

class Toggler extends React.Component {
  handleClick = (e) => {
    e.target.textContent === 'Off'
      ? (e.target.textContent = 'On')
      : (e.target.textContent = 'Off');
  };

  render() {
    return (
      <button className='toggler' onClick={this.handleClick}>
        Off
      </button>
    );
  }
}

export default Toggler;
