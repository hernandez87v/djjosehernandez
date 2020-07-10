import React from 'react';
import Header from './components/NavBar/Header';
import './App.css';
import Twitch from './components/TwitchPlayer/Twitch';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Twitch></Twitch>
    </div>
  );
}

export default App;
