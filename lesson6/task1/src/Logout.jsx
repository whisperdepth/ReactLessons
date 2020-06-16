import React from 'react';

class Logout extends React.Component {

  render() {
    return (
      <button className='login btn' onClick={this.handleLogout}>
        Logout
      </button>
    );
  }
}
export default Logout;
