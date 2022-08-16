//add event handler with the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the new deposit amount from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    //get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    //add the previous deposit total with new deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the total deposit into the deposit total element
    depositTotalElement.innerText = currentDepositTotal;

    //get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    //add the previous balance total with new deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the total balace into the balance total element
    balanceTotalElement.innerText = currentBalanceTotal;

    //clear the value in the deposit field
    depositField.value = '';
})