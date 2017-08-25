import React, { Component } from 'react';
import logo from './kind2.svg';
import './App.css';
import Hamburger from './Hamburger';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="menu-mobile">
                  <Hamburger/>
              </div>
          </div>
        <p className="App-intro">
            Lorem ipsum dolor sit amet
        </p>
      </div>
    );
  }
}

export default App;
