// frontend/firebase.js

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase project configuration (from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCs9tIohCiorTaJZJKB6JvJWja9MGNbYmY",
  authDomain: "kisan-f3906.firebaseapp.com",
  projectId: "kisan-f3906",
  storageBucket: "kisan-f3906.firebasestorage.app",
  messagingSenderId: "470731900102",
  appId: "1:470731900102:android:fa51606f769b43647743c7"
};

// Ensure SDK initializes only once (React Native / Expo best practice)
const app = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Anonymous authentication helper
export const authenticateUser = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error('Authentication error:', error);
    return {
      uid: 'demo-user-' + Math.random().toString(36).substr(2, 9),
      isAnonymous: true
    };
  }
};
