const todoInput = document.querySelector(".todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.querySelector(".todolist");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',remove);
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
    trashButton.innerHTML='<i class = "fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
  
    //append to list
    todoList.append(todoDiv);
    todoInput.value='';
    
}
//trash function
function remove(e){
    //delete 
    const item = e.target;
    if(item.classList[0]==='trash-btn')
    {
        todo=item.parentElement;

        //animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend",()=>{
            todo.remove();
        })
    }

    //check
    if(item.classList[0]==='complete-btn'){
        todo=item.parentElement;
        todo.classList.toggle("completed");
        
        item.onclick=()=>{
            this.classList.add("normal");
            this.classList.toggle("normal");
        }
    }

}
