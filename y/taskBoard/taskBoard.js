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

const tasklist = document.querySelector('#task-list');
const form = document.querySelector('#add-task-form');

// Create element and render cafe
function renderTasklist(doc){
    let li = document.createElement('li');
    let task = document.createElement('span');
    let description = document.createElement('span');
    let dueDate = document.createElement('span')
    let red = document.createElement('span');
    let yellow = document.createElement('span');
    let green = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id)
    task.textContent = doc.data().task;
    description.textContent = doc.data().description;
    dueDate.textContent = doc.data().dueDate;
    red.textContent = doc.data().red;
    yellow.textContent = doc.data().yellow;
    green.textContent = doc.data().green;
    cross.textContent = 'x';

    li.appendChild(task);
    li.appendChild(description);
    li.appendChild(dueDate);
    li.appendChild(red);
    li.appendChild(yellow);
    li.appendChild(green);
    li.appendChild(cross);

    tasklist.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id= e.target.parentElement.getAttribute('data-id');
        database.collection('tasks').doc(id).delete();
    })
}

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    database.collection('tasks').add({
        task: form.task.value,
        description: form.description.value,
        dueDate: form.dueDate.value,
        red: form.red.value,
        yellow: form.yellow.value,
        green: form.green.value
    });
form.task.value = '';
form.description.value ='';
form.dueDate.value='';
form.red.value ='';
form.yellow.value ='';
form.green.value ='';
})

// realtime listener
database.collection('tasks').orderBy('green').onSnapshot(snapshot => { // changed task to category
    let changes = snapshot.docChanges();
    // console.log(changes);
    changes.forEach(change => {
    //console.log(change.doc.data())
        if(change.type == 'added'){
            renderTasklist(change.doc);
        }
        else if(change.type == 'removed'){
            let li = tasklist.querySelector('[data-id=' + change.doc.id +']');
            tasklist.removeChild(li);
        }
    })
})
// user log out reirect to home page
// wont work untill taskboard is in same directory as home.html
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  //uncomment code donw below to check if user is logged out 
  console.log('user signed out');
  window.location = '../home.html';
  ///Users/marcosmartinez/Desktop/FS-CSCI150-F21-Team9/Y/home.html
});
