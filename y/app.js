// document.addEventListener("DOMContentLoaded", event => {
//   const app = firebase.app();
// });
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
//     authDomain: "login-demo-254f7.firebaseapp.com",
//     projectId: "login-demo-254f7",
//     storageBucket: "login-demo-254f7.appspot.com",
//     messagingSenderId: "228883805517",
//     appId: "1:228883805517:web:db9063121d6bf3a79ab304",
//     measurementId: "G-C8Q2HYKHY1"
//   };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth =  firebase.auth();
// const analytics = getAnalytics(app);

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider)
//       .then(result => {
//         const user = result.user;
//       })
// }

// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// })

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// })


//  //signup function
//   function signUp(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     alert("SignUp Successfully");
//   }
// // Sign In function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
    
//   }
// //sign out function
//    function signOut(){
//     auth.signOut();
//     alert("SignOut Successfully from System");
//   }

//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       alert("Active user "+email);

//     }else{
//       alert("No Active user Found")
//     }
//   })
