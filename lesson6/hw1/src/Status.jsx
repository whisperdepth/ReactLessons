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


  render() {
    return (
      <>
        {this.state.isOnline ? (
          <Online />
        ) : (
          <Offline />
        )}
      </>
    );
  }
}

export default Status;
