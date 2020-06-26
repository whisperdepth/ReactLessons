import React from 'react';

class OddNumbers extends React.Component {

    // eslint-disable-next-line class-methods-use-this
    shouldComponentUpdate(nextProps){
        return nextProps.number % 2 !== 0;
    }

  render() {
    const { title, number } = this.props;
    return (
      <div className='number'>
        <span className='number__title'>{title}</span>
        <span className='number__value'>{number}</span>
      </div>
    );
  }
}

export default OddNumbers;
