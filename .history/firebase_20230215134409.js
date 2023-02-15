// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC13W4ClUwixcFAutNluaoME-SuBxwnzVU',
  authDomain: 'clone-7c138.firebaseapp.com',
  projectId: 'clone-7c138',
  storageBucket: 'clone-7c138.appspot.com',
  messagingSenderId: '483858297605',
  appId: '1:483858297605:web:4960f3ba77ae4f75ab7d6c',
};

// Initialize Firebase
const app = !getApps
const db = getFirestore();

export { db };
export default app;
