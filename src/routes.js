import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/lojaSapatos/" exact component={Home} />
      <Route path="/lojaSapatos/cart" component={Cart} />
      <Redirect to="/lojaSapatos/" />
    </Switch>
  );
}
