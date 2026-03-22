const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    if (input.value.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${input.value}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', () => li.remove());

    taskList.appendChild(li);
    input.value = "";
});