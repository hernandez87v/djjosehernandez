import * as firebase from "firebase/app";
import "firebase/messaging";
import FcmConfig from '../../fcm-config';
const initializedFirebaseApp = firebase.initializeApp(FcmConfig);
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BIqpKflfC8RcOHgrziKQ2VMYAMFGF8_hqe2g0oYIP8Y_9hZbtSQHpK3EjxDmX8ptcmI8C15f5wTCbWJnoPX6JyA"
);
export { messaging };
