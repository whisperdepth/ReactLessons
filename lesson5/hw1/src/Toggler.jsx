import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Off',
    };
  }

  /* handleClick = (e) => {
    e.target.textContent === 'Off'
      ? (e.target.textContent = 'On')
      : (e.target.textContent = 'Off');
  }; */

  handleClick = (e) => {
    this.state.value === 'Off'
      ? this.setState({
          value: (this.state.value = 'On'),
        })
      : this.setState({
          value: (this.state.value = 'Off'),
        });
  };

  render() {
    return (
      <button className='toggler' onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
