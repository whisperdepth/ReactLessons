import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3,
    };
  }

  goNext = () => {
    this.setState({
      currentPage: +this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const from = this.state.currentPage * this.state.itemsPerPage;
    const to =
      this.state.itemsPerPage +
      this.state.currentPage * this.state.itemsPerPage;

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage + 1}
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.props.users.length}
          goNext={this.goNext}
          goPrev={this.goPrev}
        />
        <ul className='users'>
          {this.props.users.slice(from, to).map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
