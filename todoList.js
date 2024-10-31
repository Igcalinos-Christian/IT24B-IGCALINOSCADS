const taskGetter = document.getElementById('taskGetter');
const taskCleaner = document.getElementById('taskCleaner');
const taskAppend = document.getElementById('taskList');
var task = document.getElementById('task');

taskGetter.addEventListener('click', () => {
    const input = task.value;
    PostTask(input);
    task.value = '';
})

taskCleaner.addEventListener('click', () => {
    taskAppend.innerHTML = '';
})

function PostTask(input){   
        if(!input){
            console.log('Please enter task');
        }
        else{
            const task = document.createElement('div');
            task.classList.add('card');
            task.innerHTML = `<p>${input}<\p><br><button>Done</button><button>Delete</button><button>Edit</button>`;
            taskAppend.appendChild(task);
        }
}
