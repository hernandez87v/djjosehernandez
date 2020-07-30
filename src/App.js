import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Twitch from './components/TwitchPlayer/Twitch';
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SoundCloud from './components/Soundcloud/Soundcloud';
import Home from './components/Home/Home';

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
