import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  onOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    if (this.state.status === 'offline') {
      return <div className='status status_offline'>{this.state.status}</div>;
    }
    return <div className='status'>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
