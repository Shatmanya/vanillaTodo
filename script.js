const todoInput = document.querySelector(".todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todolist");

todoButton.addEventListener('click',addTodo);
trashButton.addEventListener('click',remove);
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");

    //create <li>
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
   
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check""></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<li class = "fas fa-trash-alt"></li>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
  
    //append to list
    todoList.append(todoDiv);
    todoInput.value='';
    
}
//trash function
function remove(){
    function remove(e){
    const item = e.target;
    if(item.classList[0]==='trash-btn')
    {
        todo=item.parentElement;
        todo.remove();
    }
}

}
