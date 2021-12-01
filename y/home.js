const date = new Date();

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


document.querySelector(".month").innerHTML = month[date.getMonth()];
document.querySelector(".day").innerHTML = date.getDate();
document.querySelector(".year").innerHTML = date.getFullYear();


const firebaseConfig = {
  apiKey: "AIzaSyDTux8kStcOHDEmLKB_fbqGbxNE2lLKHL4",
  authDomain: "paw-lender.firebaseapp.com",
  databaseURL: "https://paw-lender-default-rtdb.firebaseio.com",
  projectId: "paw-lender",
  storageBucket: "paw-lender.appspot.com",
  messagingSenderId: "156009579264",
  appId: "1:156009579264:web:e9123a4fd752386f0669e5",
  measurementId: "G-ZSRT2Q966P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const db = firebase.firestore();
const form = document.querySelector("#issue-form");

form.addEventListener("submit", (e) => {
  // Prevent it from refreshing the page
  e.preventDefault();
  db.collection("issues").add({
    email: form.email.value,
    issue: form.issue.value,
    subject: form.subject.value
    });
  
  // Clear the form after user hit the submit button
  form.email.value = "";
  form.issue.value = "";
  form.subject.value = "";
});
//user logout redirect to home page

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  //uncomment code donw below to check if user is logged out 
  console.log('user signed out');
  window.location = 'home.html';
});
//redirect user to home page if sign-out