let btn = document.getElementById("btn");
let showBtn = document.getElementById("showBtn");
btn.addEventListener("click", function () {
  let fullname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("contact").value;
  let address = document.getElementById("address").value;
  let gender;
  const genderList = document.querySelectorAll("#gender");
  for (let i = 0; i < genderList.length; i++) {
    if (genderList[i].checked) {
      gender = genderList[i].value;
    }
  }
  gender.id = "gender";

  let languages = "";
  const languageList = document.querySelectorAll("#language");
  for (let i = 0; i < languageList.length; i++) {
    if (languageList[i].checked) {
      languages = languages.concat(languageList[i].value.toString(), ",");
    }
  }
  languages.id = "languages";

  let identity = document.getElementById("identity").value;

  localStorage.setItem("fullName", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("contact", contact);
  localStorage.setItem("address", address);
  localStorage.setItem("gender", gender);
  localStorage.setItem("languages", languages);
  localStorage.setItem("identity", identity);
  showBtn.style.display = "inline";
});

showBtn.addEventListener("click", function () {
  let fullname = localStorage.getItem("fullName");
  let email = localStorage.getItem("email");
  let contact = localStorage.getItem("contact");
  let address = localStorage.getItem("address");
  let gender = localStorage.getItem("gender");
  let languages = localStorage.getItem("languages");
  let identity = localStorage.getItem("identity");
  alert(fullname);
  let msg = `
    <h4>Personal Details</h4>
    <table style="text-align:left;">
      <tr>
        <th>Full Name:</th><td>${fullname}</td>
      </tr>
      <tr>
        <th>Email:</th><td>${email}</td>
      </tr>
      <tr>
        <th>Contact Info:</th><td>${contact}</td>
      </tr>
      <tr>
        <th>Address:</th><td>${address}</td>
      </tr>
      <tr>
        <th>Gender:</th><td>${gender}</td>
      </tr>
      <tr>
        <th>Languages:</th><td>${languages}</td>
      </tr>
      <tr>
        <th>identity Proof:</th><td>${identity}</td>
      </tr>
    </table>
    `;
  document.getElementById("showDetails").innerHTML = msg;
});
