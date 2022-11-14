const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const tasks = document.querySelector('.tasks')

//Capturing keystrokes:
form.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!form.value) return
        createTask(form.value)
       
    }
})
//Creating a li task:
function creatingLi() {
    const li = document.createElement('li')
    return li
}
//Rescuing the task and add on 'ul' list:
function createTask(inputTextTask) {
    // console.log(inputTextTask)
    const li = creatingLi()
    li.innerHTML = inputTextTask
    tasks.appendChild(li)
    clearForm()
    createDeleteButton(li)
}

//function to capture the button:
btn.addEventListener('click', function () {
    //console.log(form.value)
    if (!form.value) return
    createTask(form.value)
})

//Cleaning InputAddTNewTask:
function clearForm(){
    form.value = ''
    form.focus()
}

//Function to create a delete button task:
function createDeleteButton(li){
    li.innerText += ' '
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Del'
    btnDelete.setAttribute('class', 'classButtonDel')
    btnDelete.setAttribute('title', 'Click to delete this task')
    li.appendChild(btnDelete)
    saveTasksToLocalStorage()
}

//Capturing element clicked: btnDelete:
document.addEventListener('click', function(event){
    const elementClicked = event.target
    //console.log(elementClicked)
    if (elementClicked.classList.contains('classButtonDel')){
        //console.log('Button Delete was Clicked')
        //console.log(elementClicked.parentElement)
        elementClicked.parentElement.remove()
        saveTasksToLocalStorage()
    }
})

//Creating function to save task to local storage browser
function saveTasksToLocalStorage(){
    const liTasks = tasks.querySelectorAll('li')
    //console.log(liTasks)
    const arrayListLi = []
    for (let task of liTasks){
        //console.log(task.innerText)
        let taskText = task.innerText
        taskText = taskText.replace('Del', '').trim()
        //console.log(taskText)
        arrayListLi.push(taskText)
       // console.log(arrayListLi)

    }
const taskJSON = JSON.stringify(arrayListLi)
//console.log(taskJSON)
localStorage.setItem('tasksSaveds', taskJSON)
}

//Loading saved tasks on the Local Storage
function loadingSavesTasks(){
    const tasks = localStorage.getItem('tasksSaveds')
    const arrayListLi = JSON.parse(tasks)
    //console.log(arrayListLi)

    for (let task of arrayListLi){
        createTask(task)
    }
}
loadingSavesTasks()