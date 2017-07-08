import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import Button from 'react-toolbox/lib/button/Button';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Indio React Challenge</h2>
          </div>
          <p className="App-intro">
            To get started, press this button
            <br></br>
            <Button label="Test Button" raised primary />
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
