// elements needed:
// input tag, bc when enter it should add it to list.

const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
const todoItemEls = document.querySelectorAll('.todo__item');
//const deleteBtnEl = document.querySelectorAll('.todo__delete');
//console.log(todoItemEls);
// deleteBtnEl.innerText = "&times;";
// deleteBtnEl.className = "todo__delete";
//todoItemEls.appendChild(deleteBtnEl);

// have to do All for todoItemEls bc a lot of .todo_item elements

// on press of keyboard enter for todo input, add item to list:
function addListItem() {
  todoInputEl.addEventListener('keypress', function(event) {
    // if key pressing is 'enter' key? every key on keyboard has unique ascii code
    //console.log(event.keyCode); // find key code of pressing enter. // 13
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      //console.log(todoInputEl.value); // when if statement true, console.log input
      todoListEl.appendChild(newListItem); // append adds to end of list
      // to make input on top of list:
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = ""; // clears input box after user enters something
    }
    
})
}

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// console.log(myNodelist);

// for (let i = 0; i < todoItemEls.length; i++) {
//   var span = document.createElement('SPAN');
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   todoItemEls[i].appendChild(span);
// }

// function closeBtn() {
//   var i;
//   for (i = 0; i < todoItemEls.length; i++) {
//     var span = document.createElement('span');
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     todoItemEls[i].appendChild(span);
//   }
// }
// closeBtn();

// create strikethrough effect to show a task completed:
// loop through all list items, then add event listener
// to each of them and listen for a click. When clicked on each li item
// toggle the class done.
// below function works, but only for hardcoded items.
// dynamically created ones don't allow strikethrough after
// entering something in input box
// add to a parent element that is static and stays static
// function toggleDone() {
//   for (let elem of todoItemEls) {
//     elem.addEventListener('click', function() {
//       elem.classList.toggle('done');
//     })
//   }
// }

// Research on bubbling and propogation for ABOVE issue:
// research event.targer, classList, etc
function toggleDone() {
  todoListEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('todo__item')) {
      event.target.classList.toggle('done');
    }
  })
}

function createListItem(text) {
  const newListElement = document.createElement("li"); // create new element w/javascript
  newListElement.textContent = text;
  newListElement.setAttribute('class', 'todo__item');
  return newListElement;
  for (let i = 0; i < todoItemEls.length; i++) {
      var span = document.createElement('SPAN');
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      todoItemEls[i].appendChild(span);
  }
}

toggleDone();
addListItem();

// Delete functionality is missing. For challenge try to add it.
// add an X at end of task on right or delete button far right of task