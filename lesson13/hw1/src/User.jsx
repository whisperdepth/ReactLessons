/* eslint-disable camelcase */
import React from "react";

const baseUrl = "https://api.github.com/users";

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    fetch(`${baseUrl}/${userId}`)
      .then((resonse) => resonse.json())
      .then((result) =>
        this.setState({
          user: result,
        })
      );
  }

  render() {
    const { user } = this.state;
    if (!user) return null;

    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={`${user.avatar_url}`}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
