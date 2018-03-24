import React, { Component } from 'react';
import './App.css';
import RandomJokesGen from "./components/RandomJokesGen/RandomJokesGen"

class App extends Component {
  render() {
    return (
      <div className="main-container">
      <RandomJokesGen />
      </div>
    );
  }
}

export default App;
