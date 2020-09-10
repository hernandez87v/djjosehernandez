import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import loadable from '@loadable/component';

const Navbar2 = loadable(() => import('./components/NavBar/Navbar2'));
const Footer = loadable(() => import('./components/Footer/Footer'));
const Home = loadable(() => import('./components/Home/Home'));
const Twitch = loadable(() => import('./components/TwitchPlayer/Twitch'));
const Soundcloud = loadable(() => import('./components/Soundcloud/Soundcloud'));
const Mixcloud = loadable(() => import('./components/Mixcloud/Mixcloud'));

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-175233883-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <Switch>
          <Route path="/" rel="preconnect" exact component={Home} />
          <Route path="/Twitch" component={Twitch} />
          <Route path="/Soundcloud" exact component={Soundcloud} />
          <Route path="/Mixcloud" exact component={Mixcloud} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
