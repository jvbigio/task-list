// elements needed:
// input tag, bc when enter it should add it to list.

const todoInputEl = document.querySelector('.todo__input');
const toListEl = document.querySelector('.todo__list');
const todoItemEls = document.querySelectorAll('.todo__item');

// have to do All for todoItemEls bc a lot of .todo_item elements

// on press of keyboard enter for todo input, add item to list:
function addListItem() {
  todoInputEl.addEventListener('keypress', function(event) {
    // if key pressing is 'enter' key? every key on keyboard has unique ascii code
    //console.log(event.keyCode); // find key code of pressing enter. // 13
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      //console.log(todoInputEl.value); // when if statement true, console.log input
      toListEl.appendChild(newListItem);
      todoInputEl.value = ""; // clears input box after user enters something
    }
})
}

// create strikethrough effect to show a task completed:
// loop through all list items, then add event listener
// to each of them and listen for a click. When clicked on each li item
// toggle the class done.
function toggleDone() {
  for (let elem of todoItemEls) {
    elem.addEventListener('click', function() {
      elem.classList.toggle('done');
    })
  }
}
toggleDone();

function createListItem(text) {
  const newListElement = document.createElement("li"); // create new element w/javascript
  newListElement.textContent = text;
  newListElement.setAttribute('class', 'todo__item');
  return newListElement;
}

addListItem();