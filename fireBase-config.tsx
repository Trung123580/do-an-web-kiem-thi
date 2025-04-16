import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAjj-sgV7R_XBIX_GzePC28jlhp7yeHaYM",
  authDomain: "do-an-1-4d813.firebaseapp.com",
  projectId: "do-an-1-4d813",
  storageBucket: "do-an-1-4d813.firebasestorage.app",
  messagingSenderId: "940175338480",
  appId: "1:940175338480:web:0ed92d10134556231c8b35",
  measurementId: "G-GLJD079WB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const firebaseStorage = getStorage(app);
