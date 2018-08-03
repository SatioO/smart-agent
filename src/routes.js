import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Book } from './containers';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/book" component={Book} />
      {/* <Route exact path="/index" component={BookIndex}/> */}
    </Switch>
  );
};
