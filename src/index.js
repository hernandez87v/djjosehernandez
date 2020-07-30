// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Twitch from './components/TwitchPlayer/Twitch';
import * as serviceWorker from './serviceWorker';
// import SoundCloud from 'react-player/lib/players/SoundCloud';

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Twitch /> */}
    {/* <SoundCloud /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// PRIOR TO REACT ROUTER CHANGES BELOW
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
