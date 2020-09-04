import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Twitch from './components/TwitchPlayer/Twitch';
import Soundcloud from './components/Soundcloud/Soundcloud';
import Mixcloud from './components/Mixcloud/Mixcloud';
import Navbar2 from './components/NavBar/Navbar2';
import Footer from './components/Footer/Footer';

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
          <Route path="/" exact component={Home} />
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
