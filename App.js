function validateForm() { 
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date-input');
    const categoryInput = document.getElementById('Option-categori');
    const priorityInput = document.getElementById('task-priority'); 
    const searchInput = document.getElementById('search-bar');
    const taskListe = document.getElementById('task-list');
    const newTask = document.createElement('li');
    const taskText = taskInput.value; 
    const dueDate = dueDateInput.value; 
    const Optioncategori = categoryInput.value;
    const priority = priorityInput.value;
           
           newTask.innerText = `${taskText} - Échéance : ${dueDate} - ${Optioncategori} - ${priority}`; 

           const deleteButton = document.createElement('button'); deleteButton.textContent = 'supprimer';

            deleteButton.onclick = function() { taskListe.removeChild(newTask); };

            newTask.appendChild(deleteButton); 
            newTask.onclick = function() { newTask.classList.toggle('completed'); };
            taskListe.appendChild(newTask); 

              taskInput.value = '';
              dueDateInput.value = '';
              categoryInput.value = 'Travail'; 
              priorityInput.value = 'Basse';


                 // Appel de la fonction de filtrage après l'ajout d'une nouvelle tâche 
                 filterTasks(searchInput.value.toLowerCase());
                  } 
                  // Ajouter un écouteur d'événement pour la barre de recherche 
                  document.getElementById('search-bar').addEventListener('input', function() { const filter = this.value.toLowerCase();
                   filterTasks(filter); 
                });
                function filterTasks(filter) { const tasks = document.getElementById('task-list').getElementsByTagName('li');
                     Array.from(tasks).forEach(function(task) { const taskText = task.textContent.toLowerCase(); 
                    if (taskText.includes(filter)) { task.style.display = '';

                     } else { task.style.display = 'none';
                     }
                    });
                }
                function filterTask(status) { 
                    const tasks = document.querySelectorAll('#task-list li');
                     tasks.forEach(task => {
                         if (status === 'all') {
                         task.style.display = ''; 
                     } else if (status === 'completed' && task.classList.contains('completed')) { 
                        task.style.display = ''; 
                      } else if (status === 'ongoing' && !task.classList.contains('completed')) {
                        task.style.display = ''; 
                      } else {
                        task.style.display = 'none'; 
                      }
                     });
                     }
                     