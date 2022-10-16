// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Gl3X4Rc3ZNxGPIcCoA-uHSTffr7shVg",
  authDomain: "trello-react-native-14560.firebaseapp.com",
  projectId: "trello-react-native-14560",
  storageBucket: "trello-react-native-14560.appspot.com",
  messagingSenderId: "288650696683",
  appId: "1:288650696683:web:30f1a68fbe1624e2182bae", 
  databaseURL: "https://trello-react-native-14560-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);