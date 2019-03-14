import React, { Component } from 'react';
import { NavBar } from './components/navbar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to Movies on Movies</h1>
      </div>
    );
  }
}

export default App;
