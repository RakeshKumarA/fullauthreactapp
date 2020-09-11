import React from 'react';
import './App.css';
import LoginLayout from './components/layout/LoginLayout';
import SignupLayout from './components/layout/SignupLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForgetPwdLayout from './components/layout/ForgetPwdLayout';
import HomeLayout from './components/layout/HomeLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginLayout} />
        <Route path="/signup" exact component={SignupLayout} />
        <Route path="/home" exact component={HomeLayout} />
        <Route path="/forgotpwd" exact component={ForgetPwdLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
