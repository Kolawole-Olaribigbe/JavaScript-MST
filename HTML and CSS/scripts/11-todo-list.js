const todoList = [{
    name:'make dinner',
    dueDate: '2022-12-22',
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //Destructuring
        const {name, dueDate} = todoObject
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-btn">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addTodo() {
    const inputEl = document.querySelector('.js-name-input')
    const name = inputEl.value

    const dateInput = document.querySelector('.js-date-input')
    const dueDate = dateInput.value
    
    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    })
    
    inputEl.value = '';

    renderTodoList();
}