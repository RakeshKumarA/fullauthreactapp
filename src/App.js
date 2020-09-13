import React from 'react';
import './App.css';
import HomeLayout from './components/layout/HomeLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './PrivateRoute';
import CreateDiscountLayout from './components/layout/CreateDiscountLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeLayout} />
        <PrivateRoute
          path="/createDiscount"
          exact
          component={CreateDiscountLayout}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
