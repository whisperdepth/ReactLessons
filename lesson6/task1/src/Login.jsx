import React from 'react';

class Login extends React.Component {

  render() {
    return (
      <button className='login btn' onClick={this.handleLogin}>
        Login
      </button>
    );
  }
}
export default Login;
