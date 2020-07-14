import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import User from './User';

const Users = () => {
  return (
    <div className="page__content">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
              <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
              <Link to='/users/facebook'>Facebook</Link>
          </li>
        </ul>

        <Route path='/users/:userId' component={User}/>
         
      </BrowserRouter>
    </div>
  );
};

export default Users;
