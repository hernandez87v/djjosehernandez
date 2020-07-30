import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Twitch from './components/TwitchPlayer/Twitch';
import SoundCloud from './components/Soundcloud/Soundcloud';
import Mixcloud from './components/Mixcloud/Mixcloud';

// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/Soundcloud" component={SoundCloud} />
      <Route path="/Twitch" component={Twitch} />
      <Route path="/Mixcloud" component={Mixcloud} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

export default App;
