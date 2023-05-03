let record = [];
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData);

  let Languages = formData.getAll("language");
  obj.language = JSON.stringify(Languages);

  record.push(obj);
  let entry = JSON.stringify(record);
  localStorage.setItem("record", entry);
  let dataString = localStorage.getItem("record");
  let dataArray = JSON.parse(dataString);

  let details = document.getElementById("showDetails");
  details.innerHTML = "";
  for (eachRecord of dataArray) {
    for (item in eachRecord) {
      details.innerHTML += `${item.toUpperCase()} : ${eachRecord[item]}`;
    }
  }

  details.style.display = "block";
});
