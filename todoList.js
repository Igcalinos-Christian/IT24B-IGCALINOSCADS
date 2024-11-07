function clear(){
    const taskList = document.getElementById('taskList');
    console.log(taskList.innerText);
    taskList.textContent = "";
}

const notDoneList = document.getElementById('taskList');
const taskGetter = document.getElementById('taskGetter');

taskGetter.addEventListener('click', () => {
    const taskToPost = document.getElementById('task').value;
    console.log(taskToPost);
    
    const divContainer = document.createElement('div');
    divContainer.classList.add('card');
    divContainer.id = 'taskContainer';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskButton = document.createElement('button');
    taskButton.classList.add('task');
    taskButton.innerText = taskToPost;

    divContainer.appendChild(taskButton);
    divContainer.appendChild(checkBox);
    
    notDoneList.appendChild(divContainer);

    taskButton.addEventListener('click', () => {
        edittor(taskButton, divContainer, checkBox);
    });
});

function edittor(taskButton, divContainer, checkBox) {
    const editContainer = document.createElement('div');
    editContainer.id = 'editContainer';
    editContainer.classList.add('card');

    const deleteBt = document.createElement('button');
    deleteBt.innerText = 'Delete';
    deleteBt.classList.add('delete');

    const postEdit = document.createElement('button');
    postEdit.classList.add('postEdit');
    postEdit.innerText = 'Post Edit';

    const back = document.createElement('button');
    back.classList.add('back');
    back.innerText = 'Back';

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.classList.add('editText');
    inputText.value = taskButton.innerText;

    // Append elements to the editContainer
    editContainer.appendChild(deleteBt);
    editContainer.appendChild(postEdit);
    editContainer.appendChild(back);
    editContainer.appendChild(inputText);

    // Replace divContainer with editContainer
    divContainer.replaceWith(editContainer);

    // Attach event listeners to the newly created buttons
    deleteBt.addEventListener('click', function() {
        deleteTask(editContainer);  // Now delete the editContainer itself
    });

    postEdit.addEventListener('click', function() {
        editFunc(inputText, taskButton, divContainer, checkBox);  // Handle editing the task
    });

    back.addEventListener('click', function() {
        backFunc(editContainer, taskButton, divContainer, checkBox);  // Go back to the original task view
    });
}


function backFunc(editContainer, taskButton, divContainer, checkBox) {
    const inputText = editContainer.querySelector('.editText');
    
    divContainer.querySelector('button').innerText = inputText.value;

    editContainer.replaceWith(divContainer); 

    divContainer.querySelector('button').addEventListener('click', () => {
        edittor(taskButton, divContainer, checkBox);
    });
}

function editFunc(inputText, taskButton, divContainer, checkBox) {

    taskButton.innerText = inputText.value;
    backFunc(inputText.parentElement, taskButton, divContainer, checkBox);
}

function deleteTask(divContainer) {
    divContainer.remove();
}