/* eslint-disable camelcase */
import React from "react";

const baseUrl = "https://api.github.com/users";

class User extends React.Component {
  state = {
    name: "",
    src: "",
    location: "",
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    const renderUserData = (userData) => {
      const { avatar_url, location, name } = userData;
      this.setState({
        name,
        src: avatar_url,
        location,
      });
    };

    fetch(`${baseUrl}/${userId}`)
      .then((resonse) => resonse.json())
      .then((result) => renderUserData(result));
  }

  render() {
    const { name, src, location } = this.state;

    return (
      <div className="user">
        <img alt="User Avatar" src={`${src}`} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
