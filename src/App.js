import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Twitch from './components/TwitchPlayer/Twitch';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Twitch></Twitch>
    </div>
  );
}

export default App;
