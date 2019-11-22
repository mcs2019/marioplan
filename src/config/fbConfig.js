import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBbXRCY05nRnW-LvWg1yr-PxzXt2fJF904',
  authDomain: 'marcosmarioplan.firebaseapp.com',
  databaseURL: 'https://marcosmarioplan.firebaseio.com',
  projectId: 'marcosmarioplan',
  storageBucket: 'marcosmarioplan.appspot.com',
  messagingSenderId: '896307833034',
  appId: '1:896307833034:web:a34b8fbf621550e5cf6c33',
  measurementId: 'G-PPRQ7LN8T7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
