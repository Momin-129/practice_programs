document.getElementById("tip").addEventListener("change", (event) => {
  let amount = parseInt(document.getElementById("amount").value);
  let tipPercent = parseInt(event.target.value);
  let percent = document.getElementById("percent");
  percent.innerHTML = tipPercent + "%";
  let tip = (tipPercent / 100) * amount;
  let totAmount = amount + tip;
  let displayAmount = document.getElementById("displayAmount");
  let totalAmount = document.getElementById("totalAmount");
  displayAmount.value = amount;
  totalAmount.value = totAmount;
});
