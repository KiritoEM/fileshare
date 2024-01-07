import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const fileStorage = getStorage(app);

export { auth, provider, facebookProvider, fileStorage };
