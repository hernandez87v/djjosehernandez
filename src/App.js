import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Twitch from './components/TwitchPlayer/Twitch';
import Soundcloud from './components/Soundcloud/Soundcloud';
import Mixcloud from './components/Mixcloud/Mixcloud';
import Navbar2 from './components/NavBar/Navbar2';

// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <Route path="/" exact component={Home} />
        <Route path="/Twitch" exact component={Twitch} />
        <Route path="/Soundcloud" exact component={Soundcloud} />
        <Route path="/Mixcloud" exact component={Mixcloud} />
      </div>
    </Router>
  );
}

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

export default App;
