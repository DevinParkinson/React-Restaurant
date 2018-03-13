import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main_Page from './components/Main_Page';
import Menu from './components/Menu'
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Item from './components/Item';
import ProtectedRoute from './components/ProtectedRoute';



const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Main_Page} />
      <ProtectedRoute exact path="/menu" component={Menu} />
      <ProtectedRoute exact path="/menu/:id" component={Item} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);


export default App;
