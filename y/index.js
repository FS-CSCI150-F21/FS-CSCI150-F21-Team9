// Your web app's Firebase configuration
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
const database = firebase.firestore();


//listen for auth status change 
auth.onAuthStateChanged(user => {
  //console.log(user)
  if(user){
    console.log('user logged in', user);
  }
  else {
    console.log('user logged out');
  }
})
// const firestore = firebase.firestore();
//google log in
function googleLogin() {
  const provider1 = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider1)
      .then(result => {
        const user = result.user;
      })
}
function facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {
    const user = result.user;
  })
}
//import M from "materialize-css"
//singup new users
const signupForm = document.querySelector('#Sign-Up');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  //console.log(email, password);
  //sign up the user
  auth.createUserWithEmailAndPassword(email,password).then(cred => {
    //console.log(cred.user);
    const modal = document.querySelector('#modal-signup')
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  })
})
//code need for logout method
//html <a href"#" class "grey-text id="logout">Logout</a>
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  //uncomment code donw below to check if user is logged out 
  //console.log('user signed out);
});
//for refrence signin-form

const signinForm = document.querySelector('#signin-Form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  //get user info
  const email = signinForm['login-email'].value;
  const password = signinForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    //console.log(cred.user);
    //close login module reset form 
    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close();
    signinForm.reset();
  });
});