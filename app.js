import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDs7sUw9F5NyNcQ23a9BURY29ZLQLGS2aE",
  authDomain: "builder-forms.firebaseapp.com",
  projectId: "builder-forms",
  storageBucket: "builder-forms.appspot.com",
  messagingSenderId: "121662799741",
  appId: "1:121662799741:web:38685f87ebb62e60c2d614",
  measurementId: "G-98X994468S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const login = (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  if ((email, password == "")) {
    swal("Invalid!", "Field must be filled out!", "error");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  } else {
    window.location.href = "dashboard.html";
  }
};

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", login);
