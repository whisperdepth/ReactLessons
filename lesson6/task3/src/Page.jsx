import React from 'react';
import Message from './Message.jsx';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  setText = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className='page'>
        <Message text={this.state.text} />
        <button onClick={() => this.setText(text1)} className='btn'>
          Text 1
        </button>
        <button onClick={() => this.setText(text2)} className='btn'>
          Text 2
        </button>
        <button onClick={() => this.setText(null)} className='btn'>
          Clear
        </button>
      </div>
    );
  }
}

export default Page;
