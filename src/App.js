import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import loadable from '@loadable/component';
// const Navbar2 = loadable(() => import('./components/NavBar/Navbar2'));
// const Footer = loadable(() => import('./components/Footer/Footer'));
// const Home = loadable(() => import('./components/Home/Home'));
// const Twitch = loadable(() => import('./components/TwitchPlayer/Twitch'));
// const Soundcloud = loadable(() => import('./components/Soundcloud/Soundcloud'));
// const Mixcloud = loadable(() => import('./components/Mixcloud/Mixcloud'));
import Navbar2 from './components/NavBar/Navbar2';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Twitch from './components/TwitchPlayer/Twitch';
import Soundcloud from './components/Soundcloud/Soundcloud';
import Mixcloud from './components/Mixcloud/Mixcloud';
require('dotenv').config();

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
      cookie_flags: 'SameSite=None;Secure',
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <Switch>
          <Route path="/" rel="preconnect" exact component={Home} />
          <Route path="/Twitch" exact component={Twitch} />
          <Route path="/Soundcloud" exact component={Soundcloud} />
          <Route path="/Mixcloud" exact component={Mixcloud} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
