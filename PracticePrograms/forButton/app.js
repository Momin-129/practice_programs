createButton();
function createButton() {
  let box = document.getElementById("content");
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("button");
    element.setAttribute("id", `empty${i + 1}`);
    element.setAttribute("value", `${i + 1}`);
    element.innerHTML = `Edit ${i + 1}`;
    box.appendChild(element);
    element.onclick = (e) => {
      console.log(e.target.value);
    };
  }
}
