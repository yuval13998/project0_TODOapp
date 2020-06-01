const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

///add todo li to the list
function newTodo() {
  const text = document.getElementById("text_todo");
  if (text.value != ""){
     const li = document.createElement("LI");
     const checkbox = document.createElement("INPUT");
     checkbox.setAttribute("type", "checkbox");
     checkbox.setAttribute("onclick", "checkedtodo()");
     checkbox.setAttribute("id", "todocheck");
     li.appendChild(checkbox);
     const button = document.createElement("BUTTON");
     button.setAttribute("type", "button");
     button.setAttribute("name", "remove");
     button.innerHTML='מחיקה';
     button.className = "remove_button";
     li.innerHTML += text.value;
     li.appendChild(button);
     li.className = "todo-container";
     list.appendChild(li);
     addtodonumber();
     text.value = "";
     text.focus();
  }
  else {
    alert("הזמנה ריקה!");
  }
}

///update the todo list counter
function addtodonumber() {
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML)+1;
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML)+1;
}

///happend when check or uncheckd a todo
function checkedtodo(){
  var checkboxes = document.querySelectorAll('#todocheck')
  let counter = 0;
  for (var i in checkboxes){
    if(checkboxes[i].checked){
      counter++;
    }
  }
  uncheckedCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML)-counter;
}


///count and update the counters of todo
function countagain(){
  var checkboxes = document.querySelectorAll('#todocheck')
  itemCountSpan.innerHTML = checkboxes.length;
  checkedtodo();
}

///happend every time click with the mouse on screen
document.addEventListener('click', event => {
    const button = event.target;
    if (button.name === 'remove') {
      button.parentElement.remove();
      countagain();
    }
});
