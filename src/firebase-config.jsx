// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgitOTQTi2XZ1yXY-DqlrACMFtHk1rGsc",
  authDomain: "mini-my-pet.firebaseapp.com",
  projectId: "mini-my-pet",
  storageBucket: "mini-my-pet.appspot.com",
  messagingSenderId: "752722386193",
  appId: "1:752722386193:web:2bebaca61e8286e67880b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Storage setting
export const storage = getStorage(app);