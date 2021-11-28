// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const eventContainer = document.querySelector("#event-container");
const tdate = new Date().toLocaleDateString("en-US");

/* --------------------------- Event Render --------------------------- */
function renderEvent(doc){
  // Create element
  let event = document.createElement("div");
  let title = document.createElement("span");
  let date = document.createElement("span");
  let remove = document.createElement("i");
  event.className = "event";
  title.className = "title";
  date.className = "date";
  
  // Set element attribute and assign data
  event.setAttribute("data-id", doc.id);
  remove.setAttribute("class", "fas fa-trash");
  title.textContent = doc.data().title;
  date.textContent = doc.data().date;

  // Append the data to the Event div
  event.appendChild(title);
  event.appendChild(date);
  event.appendChild(remove);
  eventContainer.appendChild(event);

  // Delete data
  remove.addEventListener("click", (e) => {
    // Stop the event from bubbling up
    e.stopPropagation();
    // Get the event id and delete it
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("events").doc(id).delete(); 
  })
}

// Get the data from database and display on the web page
/* db.collection("events").orderBy("date").get().then(snapshot => {
  snapshot.docs.forEach(doc => {
      renderEvent(doc);
  });
}); */

db.collection("events").onSnapshot(snapshot =>{
  let changes = snapshot.docChanges();
  console.log(changes);
  changes.forEach(change => {
    if(change.type == "added"){
      renderEvent(change.doc);
    }else if (change.type == "removed"){
      let events = eventContainer.querySelector("[data-id=" + change.doc.id + "]"); 
      eventContainer.removeChild(events);
    }
  })
})

/* --------------------------- Add Event Form --------------------------- */
$("#event-form").hide();

$("#add").click(function(){
  $("#event-form").show();
});

$("#close").click(function(){
  $("#event-form").hide();
});

const form = document.querySelector("#event-form");

// Adding data to the database after user filled and submitted the form
form.addEventListener("submit", (e) => {
  // Prevent it from refreshing the page
  e.preventDefault();
  db.collection("events").add({
    title: form.title.value,
    date: form.date.value
  });

  // Clear the form after user hit the submit button
  form.title.value = "";
  form.date.value = "";
});

