import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.target.textContent === "off"
      ? e.target.textContent = "on"
      : e.target.textContent = "off";
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
