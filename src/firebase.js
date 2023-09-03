// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Q-0Btu1_AtFmhpOH_tnJMrtbvArRkZ4",
  authDomain: "samiullah-a3495.firebaseapp.com",
  projectId: "samiullah-a3495",
  storageBucket: "samiullah-a3495.appspot.com",
  messagingSenderId: "996140588112",
  appId: "1:996140588112:web:be907332c61e96bbb78555",
  measurementId: "G-Z2JN4VRSMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Storage = getStorage(app)