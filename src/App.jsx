import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Mycomponent from './components/MyComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <>
        hello world
        <Mycomponent />
      </>
    );
  }
}

export default App;
