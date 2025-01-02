function validateForm() {
    const taskInput = document.getElementById('task')
    const taskListe = document.getElementById('task-list')
    const newTask = document.createElement('li')
    const taskText = taskInput.value;

    newTask.innerText = taskText;

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'supprimer'
    deleteButton.onclick = function() {
        taskListe.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);

    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };

    taskListe.appendChild(newTask);
    taskInput.value = '';
}