const header = document.getElementById("header");
const content = document.getElementById("content");

function joke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.content);
      header.textContent = data.data.content.text_head;
      if (data.data.content.text === "") {
        content.textContent = data.data.content.text_hidden;
      } else {
        content.textContent = data.data.content.text;
      }
    });
}

document.body.addEventListener("click", joke);
