// step-1: add  event listener to diposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  //  step-2: get diposit amount from the diposit input field
  //   for input field use .value to get the value of input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //   step-3:get the current diposit total
  // for non input(Element other than input , textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDeposiTotalString = depositTotalElement.innerText;
  const previousDeposiTotal = parseFloat(previousDeposiTotalString);
  // step-4:add number to set the total deposit
  const currentDepositTotal = previousDeposiTotal + newDepositAmount;
  //   set the deposit total
  depositTotalElement.innerText = currentDepositTotal;
  // step-5:get the balance current
  const balanceTotalElement = document.getElementById("balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  //   step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //   set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //   step-7: clear the deposit field text
  depositField.value = "";
});
