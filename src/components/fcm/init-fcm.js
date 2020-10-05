import * as firebase from 'firebase/app';
import 'firebase/messaging';
import FcmConfig from '../../fcm-config';
const initializedFirebaseApp = firebase.initializeApp(FcmConfig);
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  'BBQIoNHF4_qCNuFq0htHsInDCIn376GqexCfwU4mOeWrar-nzF1mE-QEg-HKj_rf8c4tvl6OU_aePztrLUJB94M'
);
export { messaging };
