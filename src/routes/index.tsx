import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/login" exact component={Login} />
    <Route path="/home/:companyName" component={Home} />
    <Route path="/posts/:userId/:userName" component={Posts} />

    <Redirect to="/login" />
  </Switch>
);

export default Routes;
