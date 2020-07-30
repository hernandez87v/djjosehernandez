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
    <>
      <div className="App">
        <Navbar></Navbar>
        {/* <Twitch></Twitch> */}
        {/* <Footer></Footer> */}
      </div>
      <main>
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/Soundcloud" component={SoundCloud}>
            <SoundCloud />
          </Route>
          <Route path="/Twitch" component={Twitch}>
            <Twitch />
          </Route>
          <Route path="/Mixcloud" component={Mixcloud}>
            <Mixcloud />
          </Route>
        </Switch>
      </main>
    </>
  );
}

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

export default App;
