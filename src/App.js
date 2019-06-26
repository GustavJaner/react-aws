import React from 'react';
import './App.css';

import logo from './logo.svg';

import Greeting from './Test';
import Clock from './Clock';
import Toggle from './Toggle'
import Video from './Video';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Video />
        <Greeting lol="prop parameter" />
        <Clock />
        <Toggle />

        <img src={logo} alt="Logo" />

        <img src={ process.env.PUBLIC_URL + 'media/img/smile.jpeg' } />


      </header>
    </div>
  );
}
