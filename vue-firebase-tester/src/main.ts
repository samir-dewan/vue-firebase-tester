import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCUq6MHEoUBLi57RY2EoP2Rs_XlA2Czqo",
  authDomain: "fir-vue-tutorial-3fada.firebaseapp.com",
  projectId: "fir-vue-tutorial-3fada",
  storageBucket: "fir-vue-tutorial-3fada.appspot.com",
  messagingSenderId: "337213495898",
  appId: "1:337213495898:web:f0a89f9dc396e7d0eb5663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createApp(App).mount('#app')
