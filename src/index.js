import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js';
ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

const tokenString = document.getElementById('token');
const errorMessage = document.getElementById('error');
const message = document.getElementById('message');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = 'Notifications allowed';
    return messaging.getToken();
  })
  .then((token) => {
    tokenString.innerHTML = 'Token Is : ' + token;
  })
  .catch((err) => {
    errorMessage.innerHTML = errorMessage.innerHTML + '; ' + err;
    console.log('No permission to send push', err);
  });

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  const { title, ...options } = payload.notification;
});
