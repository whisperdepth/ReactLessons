import React from "react";
import { useParams } from 'react-router-dom';

const baseUrl = "https://api.github.com/users";

const User = () => {
    const { userId } = useParams();

  return (
    <div className="user">
      {/* <img alt="User Avatar" src={`${src}`} className="user__avatar" /> */}
      <div className="user__info">
        <span className="user__name">{userId}</span>
        {/* <span className="user__location">{location}</span> */}
      </div>
    </div>
  );
};

export default User;
