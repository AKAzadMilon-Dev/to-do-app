
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-c0k8_7BsH3SuJ98qlcoWE-3E51AymvM",
  authDomain: "to-do-app-e979b.firebaseapp.com",
  projectId: "to-do-app-e979b",
  storageBucket: "to-do-app-e979b.appspot.com",
  messagingSenderId: "150418685068",
  appId: "1:150418685068:web:9bc69e29e3369c48cf4fa9"
};

const app = initializeApp(firebaseConfig);
export{getAuth, createUserWithEmailAndPassword, app}