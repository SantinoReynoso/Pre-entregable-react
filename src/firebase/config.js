// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyCYL39isIcywhvZzCBx9IVTCuIDn367NmM",
  authDomain: "fir-san-69b0a.firebaseapp.com",
  projectId: "fir-san-69b0a",
  storageBucket: "fir-san-69b0a.appspot.com",
  messagingSenderId: "128880650083",
  appId: "1:128880650083:web:3d3378c972fe20a4d09556"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
