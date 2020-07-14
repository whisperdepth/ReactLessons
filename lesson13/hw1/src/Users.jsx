import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import User from "./User";

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${match.url}`}>
          <span>Select a user please</span>
        </Route>

        <Route path={`${match.url}/:userId`} component={User} />
      </Switch>
    </div>
  );
};

export default Users;
