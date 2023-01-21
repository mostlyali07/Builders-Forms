import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


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
    initializeApp(firebaseConfig);
  var firebase = firebase.database();

submitProp.addEventListener("click", (event) => {
  event.preventDefault();
  firebase.database().ref("Property_Details/" + start).set({
    PlotSize: PlotSize.value,
    PlotType: PlotType.value,
  });
  swal("Submitted!", "Field must be filled out!", "success");
});
