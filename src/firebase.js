import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
const firebaseConfig = {
  apiKey: 'AIzaSyDzs4Xa4QoNd1kJQtXt4XPVhq98El7mcdo',
  authDomain: 'react-notifications-c7768.firebaseapp.com',
  projectId: 'react-notifications-c7768',
  storageBucket: 'react-notifications-c7768.appspot.com',
  messagingSenderId: '337969503695',
  appId: '1:337969503695:web:dd0191381581892ea246ba',
  measurementId: 'G-ZBNZ1XF66Q',
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      'BF6N5s8HPBWIXdywjO0Gx9JS_2v47N6e19M-ntDcrwsgbXwYmfHhuWqGC6F4jV4vWpNb8HHioW9_BEUbwiNFpqY',
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        );
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('payload', payload);
      resolve(payload);
    });
  });
