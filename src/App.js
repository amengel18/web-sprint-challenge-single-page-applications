import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
import Pizza from './Pizza'
import HomePage from './HomePage'
import ConfirmPage from './ConfirmPage'
import * as Yup from 'yup'


const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1 className='store header'>Lambda Eats</h1>
        <div className='nav links'>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route path="/confirm">
          <ConfirmPage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
