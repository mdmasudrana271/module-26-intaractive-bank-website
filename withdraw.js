document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawString = withdrawField.value;
  const newWithdraw = parseFloat(newWithdrawString);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  withdrawField.value = "";

  if (isNaN(newWithdraw)) {
    alert("please provide e number amount");
    return;
  }

  const balanceTotalElement = document.getElementById("balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdraw > previousBalanceTotal) {
    alert("Baap er bank e eto taka nai");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithdraw;
  balanceTotalElement.innerText = newBalanceTotal;
  withdrawField.value = "";
});
