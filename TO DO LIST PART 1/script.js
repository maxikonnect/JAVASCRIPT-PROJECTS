window.onload = function(){
    const todo = document.querySelector('.todo');
    const submit = document.querySelector('#submit');
    const clear = document.querySelector('#clear');
    const display = document.querySelector('#display');
    let storeTodoList = localStorage.getItem('getTodo');
    let todoListArray = storeTodoList ? JSON.parse(storeTodoList) : [];
    console.log(todoListArray);
    
    submit.addEventListener('click', addingTodoItem);

    
    function addingTodoItem(){
        let todoList = todo.value.trim();
        if(todoList !== ''){
            todoListArray.push(todoList);
            console.log(todoListArray)
        }
        localStorage.setItem('getTodo', JSON.stringify(todoListArray));
        todo.value = '';
    }

    clear.addEventListener('click', clearToDoList);

    function clearToDoList(){
        todoListArray = [];
        localStorage.setItem('getTodo', JSON.stringify(todoListArray))
        console.log(todoListArray)

    }
    
}




