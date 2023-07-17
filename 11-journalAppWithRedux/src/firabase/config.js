// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCkd9syVSQehcKNOWEHMxWcRiP7MMSXH0",
  authDomain: "dt-react-course.firebaseapp.com",
  projectId: "dt-react-course",
  storageBucket: "dt-react-course.appspot.com",
  messagingSenderId: "562896946019",
  appId: "1:562896946019:web:2d35c90efcb3151e088956",
  measurementId: "G-NDMYM4D1QR"
};

// Initialize Firebase

export const FirebaeApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(FirebaeApp);
export const FirebaseAuth = getAuth(FirebaeApp); // funcionalidades de authentication
export const FirebaseDB = getFirestore( FirebaeApp ); // config de la base de datos