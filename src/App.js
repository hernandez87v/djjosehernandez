import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Twitch from './components/TwitchPlayer/Twitch';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Twitch></Twitch>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
