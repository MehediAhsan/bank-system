//add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get the new withdraw amount from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    //clear the value in the withdraw field
    withdrawField.value = '';

    //validation for number
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a number');
        return;
    }

    //get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Please enter amount less than '+previousBalanceTotal);
        return;
    }

    //get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    //add the previous withdraw total with new withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //set the total withdraw into the withdraw total element
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //add the previous balance total with new withdraw amount
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set the total balace into the balance total element
    balanceTotalElement.innerText = currentBalanceTotal;   
})