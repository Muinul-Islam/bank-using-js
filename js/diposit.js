// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
// get the deposit amount from the deposit input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;

  const newDepositAmount = parseFloat(newDepositAmountString);

  // get the total deposit
  const depositTotalElement = document.getElementById('deposit-total');

  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  // get total current balance
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  // set the total balance
  balanceTotalElement.innerText = currentBalanceTotal;


  // clear the deposit field
  depositField.value = '';
})