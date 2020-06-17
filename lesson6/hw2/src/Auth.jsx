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

  renderLogOut = () => {
    return <Spinner display={'inline-block'} size={25} />;
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
                  console.log(this.state.showSpinner);
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
