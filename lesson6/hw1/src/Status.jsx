import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  onBtnClick = () => {
    this.setState({
        isOnline: true
    })
  }

  render() {
    return (
      <div className='status'>
        {this.state.isOnline ? <Online /> : <Offline onBtnClick={this.onBtnClick}/>}
      </div>
    );
  }
}

export default Status;
