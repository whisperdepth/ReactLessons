import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showSpinner: true,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <>
            {setTimeout(
              () =>
                function () {
                  this.state.showSpinner = false;
                },
              2000
            )}
            {this.state.showSpinner ? (
              <Spinner size={25} />
            ) : (
              <Logout onLogout={this.onLogout} />
            )}
          </>
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </>
    );
  }
}

export default Auth;
