import React from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class Page extends React.Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const {firstName, lastName} = this.state;
    return (
      <div className='page'>
        <h1 className='title'>{`Hello, ${firstName} ${lastName}`}</h1>
        <main className='content'>
          <ShoppingCart userData={this.state.userData} />
          <Profile userData={this.state.userData} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}

export default Page;