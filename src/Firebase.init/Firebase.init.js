
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnd0q1WoEpXztV4lUfgSqtPuuKzHNOYZc",
  authDomain: "tasty-toods.firebaseapp.com",
  projectId: "tasty-toods",
  storageBucket: "tasty-toods.appspot.com",
  messagingSenderId: "325341830155",
  appId: "1:325341830155:web:f4bd28f11751bfb3023b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;