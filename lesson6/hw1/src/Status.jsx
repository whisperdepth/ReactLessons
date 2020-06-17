import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{this.props.isOnline ? <Online /> : <Offline />}</>;
  }
}

export default Status;
