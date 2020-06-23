import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return <UserForm createUser={this.createUser}/>;
  }
}
export default App;
