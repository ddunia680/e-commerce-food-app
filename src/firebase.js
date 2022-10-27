// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuC4ZNYaXndv1jUFkJL5AQap1QtIUtBJ4",
  authDomain: "food-delivery-app-42557.firebaseapp.com",
  databaseURL: "https://food-delivery-app-42557-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-42557",
  storageBucket: "food-delivery-app-42557.appspot.com",
  messagingSenderId: "1022078276075",
  appId: "1:1022078276075:web:05a913fbda6ff0c611c9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//telling firebase that we're going to be using the storage in this application
export const storage = getStorage(app);