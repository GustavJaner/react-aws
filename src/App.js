import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greeting from './Test';
import Clock from './Clock';
import Toggle from './Toggle'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Greeting lol="prop parameter" />
        <Clock />
        <Toggle />

      </header>
    </div>
  );
}

export default App;
