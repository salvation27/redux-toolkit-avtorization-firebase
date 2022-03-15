import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyAKO2Pe5ZDNHuIaZeCE93QCCegb35XgRns',
  authDomain: 'auth-example-6a694.firebaseapp.com',
  projectId: 'auth-example-6a694',
  storageBucket: 'auth-example-6a694.appspot.com',
  messagingSenderId: '4498389263',
  appId: '1:4498389263:web:40f90e9fb1ee5b09df667a',
};

const app = initializeApp(firebaseConfig);

console.log(app)

