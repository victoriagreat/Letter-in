import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCP-iQxI_cUww-l4vy9xth3_pK44rJUwuo",
    authDomain: "my-auth-3854c.firebaseapp.com",
    projectId: "my-auth-3854c",
    storageBucket: "my-auth-3854c.appspot.com",
    messagingSenderId: "1018099927467",
    appId: "1:1018099927467:web:3b62f65b8e671c8e7aeaee",
    measurementId: "G-76B7CJWHQT"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)