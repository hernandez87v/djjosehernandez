import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Twitch from './components/TwitchPlayer/Twitch';
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SoundCloud from 'react-player/lib/players/SoundCloud';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Twitch></Twitch>
        {/* <Footer></Footer> */}

        <nav>
          <ul>
            <li>
              <Link to="/components/Soundcloud/Soundcloud">About</Link>
            </li>
            <li>
              <Link to="/Twitch">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/components/Soundcloud/Soundcloud">
            <SoundCloud />
          </Route>
          <Route path="/users">
            <Twitch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
