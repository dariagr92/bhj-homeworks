const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim().length != 0){
        tasksList.insertAdjacentHTML('beforeend', `<div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>`)
      input.value = "";
      const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
      const task = Array.from(document.querySelectorAll('.task'));
        taskRemove[task.length - 1].addEventListener('click', (e) => {
            e.preventDefault();
            task[task.length - 1].remove();
        });

    }
});