import React from 'react';
import Life from './Life.jsx';

class Demo extends React.Component {
  state = {
    number: Math.round(Math.random() * 100),
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
          <button onClick={this.update}>Update</button>
        </div>
        <div>{this.state.visible && <Life number={this.state.number} />}</div>
      </div>
    );
  }
}

export default Demo;
