const listElement = document.querySelector("li");
const ul = document.querySelector("ul");
const taskInput = document.getElementById("taskInput");

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let task = e.target.value;
    taskList.innerHTML += "<li>" + task + "</li>";
    taskInput.value = "";
  }
});
ul.addEventListener("click", (e) => {
  e.target.remove();
});
