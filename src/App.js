import React, { Component } from 'react';
import './App.css';
import StuffList from './component/StuffList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <StuffList />
      </div>
    );
  }
}

export default App;
