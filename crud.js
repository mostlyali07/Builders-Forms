import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDs7sUw9F5NyNcQ23a9BURY29ZLQLGS2aE",
  authDomain: "builder-forms.firebaseapp.com",
  projectId: "builder-forms",
  storageBucket: "builder-forms.appspot.com",
  messagingSenderId: "121662799741",
  appId: "1:121662799741:web:38685f87ebb62e60c2d614",
  measurementId: "G-98X994468S",
};

initializeApp(firebaseConfig);

// console.log(PlotTypebyName);

// submitProp.addEventListener("click", (event) => {
//   event.preventDefault();
//   // console.log(PlotTypebyName, PlotSize);
//   function writeUserData(userId, PlotTypebyName, PlotSize) {
//     const db = getDatabase();
//     // let PlotTypebyName = document.getElementsByName("PlotType").checked;
//     set(ref(db, "Property_Details/" + userId), {
//       PlotTypebyName: PlotTypebyName,
//       PlotSize: PlotSize,
//     });
//   }
//   writeUserData();

//   swal("Submitted!", "Field must be filled out!", "success");
// });
function hello() {
  let hello = document.getElementById("PlotSize").value;
  console.log(hello);
}