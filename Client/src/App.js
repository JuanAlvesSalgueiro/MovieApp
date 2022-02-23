import React from 'react';

import './App.css';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Login } from './components/pages/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';


function App() {
  const { authenticated } = useSelector(state => state.auth);
  
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute 
          exact 
          path="/login" 
          component={ Login }
          isAuthenticated={ authenticated }
        />

        <PrivateRoute 
          exact 
          path="/*" 
          component={ DashboardRoutes } 
          isAuthenticated={ authenticated }
        />

        <Redirect to="/" />   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
