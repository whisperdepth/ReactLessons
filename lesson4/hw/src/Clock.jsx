import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';
import getTimeWithOffset from './getTimeWithOffset.js';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      time: moment(getTimeWithOffset(this.props.offset)).format('h:mm:ss A'),
    };

    setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(this.props.offset)).format('h:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock__location'>{this.props.location}</div>
        <div className='clock__time'>{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
