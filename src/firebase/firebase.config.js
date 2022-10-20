// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoY8RDBE3YoXt7exX-G6cLhcKquQ4bEI4",
  authDomain: "news-portal-with-react-auth.firebaseapp.com",
  projectId: "news-portal-with-react-auth",
  storageBucket: "news-portal-with-react-auth.appspot.com",
  messagingSenderId: "167678113304",
  appId: "1:167678113304:web:83b20b99b719e13a72f56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;