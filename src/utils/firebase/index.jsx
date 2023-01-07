// import {getAuth} from 'firebase/auth';
import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';
// import firestore from '@react-native-firebase/firestore';
// import {Auth} from '@react-native-firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyADPmadM6V2x__g71_gxmhDsT1zCdq2P1U',
  authDomain: 'nbe-project-c0a8c.firebaseapp.com',
  projectId: 'nbe-project-c0a8c',
  storageBucket: 'nbe-project-c0a8c.appspot.com',
  messagingSenderId: '165931277701',
  appId: '1:165931277701:web:fb0aa58a0073fe71dcf8ec',
};
// if (firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export {firebase, Auth, firestore};
// function Setup() {
//   return <App />;
// }
// export default Setup;
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
// export const db = firestore(fb);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
