document.getElementById("tip").addEventListener("change", CalculatTip);

function CalculatTip() {
  let amount = parseInt(document.getElementById("amount").value);
  let displayAmount = document.getElementById("displayAmount");
  let totalAmount = document.getElementById("totalAmount");
  if (!isNaN(amount)) {
    let tipPercent = parseInt(document.getElementById("tip").value);
    let percent = document.getElementById("percent");
    percent.innerHTML = tipPercent + "%";
    let tip = (tipPercent / 100) * amount;
    let totAmount = amount + tip;
    displayAmount.value = amount;
    totalAmount.value = totAmount;
  } else {
    displayAmount.value = 0;
    totalAmount.value = 0;
  }
}

document.getElementById("amount").addEventListener("keyup", CalculatTip);
