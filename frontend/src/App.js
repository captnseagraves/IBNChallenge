import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div>
        <div id="particles">
          <Particles />
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
