  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

  import {
    getFirestore,
    addDoc,
    collection
  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDyd6x47NT3ZBN52RBqSQWLTgqfVGQ5dPE",
    authDomain: "builders-form.firebaseapp.com",
    projectId: "builders-form",
    storageBucket: "builders-form.appspot.com",
    messagingSenderId: "715169142135",
    appId: "1:715169142135:web:51bddb06443f69a0473d72"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

//   const db = getDatabase();

submitProp.addEventListener("click", (event) => {
    event.preventDefault();
    try {
      addDoc(collection(db, "PlotSize"), {
          PlotSize : PlotSize
      });
    //   console.log("Document written with ID: ", docRef.id);
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }

})