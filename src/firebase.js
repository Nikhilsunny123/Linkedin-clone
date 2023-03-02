import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWiOvKHJh8b3v0YESWlnpCSPxFEgOV_ps",
  authDomain: "linkedin-clone-4abaf.firebaseapp.com",
  projectId: "linkedin-clone-4abaf",
  storageBucket: "linkedin-clone-4abaf.appspot.com",
  messagingSenderId: "1088018484319",
  appId: "1:1088018484319:web:867c2438d8322285a41fea",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
