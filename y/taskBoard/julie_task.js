const tasklist = document.querySelector('#task-list');
const form = document.querySelector('#add-task-form');

// Create element and render cafe
function renderTasklist(doc){
    let li = document.createElement('li');
    let task = document.createElement('span');
    let description = document.createElement('span');
    let category = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id)
    task.textContent = doc.data().task;
    description.textContent = doc.data().description;
    category.textContent = doc.data().category;
    cross.textContent = 'x';

    li.appendChild(task);
    li.appendChild(description);
    li.appendChild(category);
    li.appendChild(cross);

    tasklist.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id= e.target.parentElement.getAttribute('data-id');
        database.collection('tasks').doc(id).delete();
    })
}

// // getting data
//     database.collection('tasks').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderTasklist(doc);
//     })
//     });


// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    database.collection('tasks').add({
        task: form.task.value,
        description: form.description.value,
        category: form.category.value
    });
form.task.value = '';
form.description.value ='';
form.category.value ='';
})

// realtime listener
database.collection('tasks').orderBy('category').onSnapshot(snapshot => { // changed task to category
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

function refreshPage(){
    window.location.reload();
} 

