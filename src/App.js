import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Twitch from './components/TwitchPlayer/Twitch';
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SoundCloud from 'react-player/lib/players/SoundCloud';

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        {/* <Twitch></Twitch> */}
        {/* <Footer></Footer> */}
      </div>
      <main>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route
            path="/components/Soundcloud/Soundcloud"
            component={SoundCloud}
          ></Route>
          <Route path="/components/TwitchPlayer/Twitch">
            <Twitch />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
