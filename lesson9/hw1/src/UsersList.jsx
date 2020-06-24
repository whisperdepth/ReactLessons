import React from 'react';
import User from './User.jsx'
import Filter from './Filter.jsx'

class UsersList extends React.Component {

  state = {
    filterText: '',
    count: this.props.users.length,
  }
  
  onChange = (e) =>{
    const filterText = e.target.value;
    const count = this.props.users.filter((user) =>
      user.name.toUpperCase().includes(filterText.toUpperCase())
    ).length;

    this.setState({
      filterText,
      count,
    })
  }

  render() {
    return (
      <div>
        <Filter
          onChange={this.onChange}
          count={this.state.count}
          filterText={this.state.filterText}
        />
        <ul>
          {this.props.users
            .filter((user) =>
              user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
            )
            .map((user) => (
              <User key={user.id} name={user.name} age={user.age} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
