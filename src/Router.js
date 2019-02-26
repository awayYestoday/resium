import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Czml from './components/Czml';
import Two from './components/Two';

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/czml" component={Czml} />
        <Route path="/two" component={Two} />
      </Switch>
    );
  }
}
export default Router;