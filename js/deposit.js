//add event handler with the deposite button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the new deposite amount from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    //get the previous deposite total
    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotal = parseFloat(depositTotalElement.innerText);

    //add the previous deposite total with new deposite amount
    const currentDepositeTotal = previousDepositeTotal + newDepositAmount;
    //set the total deposite into the deposite total element
    depositTotalElement.innerText = currentDepositeTotal;

    //get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    //add the previous balance total with new deposite amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the total balace into the balance total element
    balanceTotalElement.innerText = currentBalanceTotal;

    //clear the value in the deposite field
    depositField.value = '';
})