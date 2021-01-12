import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB76Z6rf2O3Kk8azhYC-EU5N3NJjlarYTs",
  authDomain: "ideaboxlive-33a34.firebaseapp.com",
  projectId: "ideaboxlive-33a34",
  storageBucket: "ideaboxlive-33a34.appspot.com",
  messagingSenderId: "848809404760",
  appId: "1:848809404760:web:0a05f30ba74c42d9c69d2d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
