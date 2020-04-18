'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    headerButton = document.querySelector('.header-button'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


let todoData = JSON.parse(localStorage.getItem('newTodo'));
if (todoData === null) {
    todoData = [];
} else {
    todoData = JSON.parse(localStorage.getItem('newTodo'));
}

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    localStorage.setItem('newTodo', JSON.stringify(todoData));

    todoData.forEach(function(item, i,) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">'+ item.value + '</span>'+
            '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
			'</div>';

        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnComplete = li.querySelector('.todo-complete');
        btnComplete.addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });

        const btnTrash = li.querySelector('.todo-remove');
        btnTrash.addEventListener('click', function () {
            todoData.splice(i, 1);
            render();
        });  

    });

    headerInput.value = '';

};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newTodo = {
        value: headerInput.value,
        completed: false
    };

    while (headerInput.value === '' || !isNaN(headerInput.value)) {
        alert('Вы не задали задачу');
        headerInput.value = '';

        return;
    };

    todoData.push(newTodo);


    localStorage.setItem('newTodo', JSON.stringify(todoData));
    render();
});
render();


  










    // document.cookie = 'name=value';
    // document.cookie = 'name2=value2';
    // document.cookie = 'name3=value3';
    // document.cookie = 'name=value4444';
    // document.cookie = 'hope=life; Expires=Tue, 5 May 2022 00:00:00 GMT';
    // console.log(document.cookie.split(' '));


// const inputText = document.getElementById('inputText'),
//     myBtn = document.getElementById('myBtn'),
//     text = document.getElementById('text');

// let showLocal = function () {
//     text.textContent = localStorage.getItem('memory');
// }


// myBtn.addEventListener('click', function () {
//     localStorage.setItem('memory', inputText.value);
//     showLocal();
// })
// showLocal();

// localStorage.removeItem('text');            

