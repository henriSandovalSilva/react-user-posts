import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/posts" component={Posts} />
  </Switch>
);

export default Routes;
