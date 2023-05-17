function showHide(value) {
  let content = document.getElementById("hiddenContent");
  let seperator = document.getElementById("seperator");
  let show = document.getElementById("show");
  let hide = document.getElementById("hide");

  if (value == "show") {
    content.style.display = "inline";
    seperator.style.display = "none";
    show.style.display = "none";
    hide.style.display = "block";
  } else if (value == "hide") {
    content.style.display = "none";
    seperator.style.display = "inline";
    show.style.display = "block";
    hide.style.display = "none";
  }
}
