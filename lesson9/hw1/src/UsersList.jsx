import React from 'react';
import User from './User.jsx'
import Filter from './Filter.jsx'

class UsersList extends React.Component {

  state = {
    filterText: '',
  }

  filteredUsers = () => {
    return this.props.users.filter((user) =>
      user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
    );
  }
  
  onChange = (e) =>{
    const filterText = e.target.value;
    this.setState({
      filterText,
    })
  }

  render() {
    return (
      <div>
        <Filter
          onChange={this.onChange}
          count={this.filteredUsers().length}
          filterText={this.state.filterText}
        />
        <ul>
          {this.filteredUsers().map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
