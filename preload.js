window.addEventListener("DOMContentLoaded", () => {
  // Add Additional Items
  var aside = document.querySelector("aside"),
    div = document.createElement("div"),
    text = document.createElement("input"),
    button = document.createElement("input");
  text.id = "input";
  text.type = "text";
  text.placeholder = "Add todo";
  button.type = "button";
  button.value = "➕";
  button.setAttribute("data-button", "outline");
  button.setAttribute("onclick", "addItem(input.value)");
  div.appendChild(text);
  div.appendChild(button);
  aside.appendChild(div);
});
