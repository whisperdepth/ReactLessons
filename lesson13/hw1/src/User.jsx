/* eslint-disable camelcase */
import React from "react";

const baseUrl = "https://api.github.com/users";

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    this.fetchUser(userId);
  }

  fetchUser = (userId) => {
    fetch(`${baseUrl}/${userId}`)
      .then((resonse) => resonse.json())
      .then((result) =>
        this.setState({
          user: result,
        })
      );
  };

  render() {
    console.log(this.props.match.params.userId)
    console.log(this.state.user);
    const { user } = this.state;
    if (!user) return null;
    const { avatar_url, name, location } = user;

    return (
      <div className="user">
        <img alt="User Avatar" src={`${avatar_url}`} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
