import React from 'react'
import './App.css';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp';
import Heal from './pages/Heal';
import Board from './pages/Board';



function App() {
  return (
    <div >
      <Switch>
        <Route exact path = '/'>
          <LandingPage/>
        </Route>

        <Route path = '/login'>
          <LoginPage/>
        </Route>

        <Route path = '/signup'>
          <SignUp/>
        </Route>
        <Route path = '/heal'>
          <Heal/>
        </Route>
        <Route path = '/board'>
          <Board/>
        </Route>
        <Route path = '/edit'>
          
        </Route>
        <Route path = '/favorite'>
          
        </Route>
        <Route path = '/written'>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
