let formElement = document.getElementById("toDosForm");
let userInput = document.getElementById("addNewToDo");
let listArea = document.getElementById("toDoList");

formElement.addEventListener("submit", addNewToDoHandler);

function addNewToDoHandler(e) {
  e.preventDefault();

  if (userInput.value) {
    listArea.insertAdjacentHTML(
      "beforeend",
      `<li>${userInput.value} <button onclick="deleteItemHandler(this)">Done!</button></li>`
    );

    userInput.value = "";
    userInput.focus();
  }
}

function deleteItemHandler(itemInfo) {
  itemInfo.parentElement.remove();
}
