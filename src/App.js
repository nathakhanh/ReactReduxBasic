import React, { Component } from 'react';
import './App.css';
import Stuff from './containers/stuffContainer';
import Employee from './containers/employeeContainer';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Stuff />
        <Employee />
      </div>
    );
  }
}

export default App;
