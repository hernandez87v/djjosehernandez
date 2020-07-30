import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
// import Home from './components/Home/Home';
import Twitch from './components/TwitchPlayer/Twitch';
import Soundcloud from './components/Soundcloud/Soundcloud';
import Mixcloud from './components/Mixcloud/Mixcloud';

// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/Twitch" exact component={Twitch} />
        <Route path="/Soundcloud" exact component={Soundcloud} />
        <Route path="/Mixcloud" exact component={Mixcloud} />
        <Route path="/" exact component={Twitch} />
      </Router>
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
