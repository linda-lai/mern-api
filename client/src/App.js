import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './Homepage';
import Band from './Homepage';
import About from './About';
import ErrorNotFound from './ErrorNotFound';

class App extends Component {
  render() {
      const path = window.location.pathname;
      if (path == '/') {
        return <Homepage />
      } else if (path == '/about') {
        return <About />
      } else {
        return <ErrorNotFound />
      }
    }
}

export default App;