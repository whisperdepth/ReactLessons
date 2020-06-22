import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to creeate state');
  }

  componentDidMount() {
    console.log('API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('decide to render or not to render');
    return nextProps.number % 2;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('some updates based on new props');
  }

  componentWillUnmount() {
    console.log('cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div>{this.props.number}</div>;
  }
}

export default Life;
