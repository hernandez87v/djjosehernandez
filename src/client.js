import React from 'react';
import FcmRoot from './components/fcm/fcm-root';
export default class Client {

  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise('initializeFCM', async (app) => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("./firebase-messaging-sw.js")
          .then(function(registration) {
            console.log("Registration successful, scope is:", registration.scope);
          })
          .catch(function(err) {
            console.log("Service worker registration failed, error:", err);
          });
      }
      app.children = (
        <FcmRoot>
          {app.children}
        </FcmRoot>
      );
    })
  }
}
