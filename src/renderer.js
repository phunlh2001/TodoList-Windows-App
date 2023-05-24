function addItem(text) {
  var div = document.querySelector("div"),
    input = document.getElementById("input");
  if (text !== "") {
    input.value = "";
    var label = document.createElement("label"),
      input = document.createElement("input"),
      span = document.createElement("span");
    input.type = "checkbox";
    span.innerHTML = text;
    label.appendChild(input);
    label.appendChild(span);
    div.parentNode.insertBefore(label, div);
  }
}
