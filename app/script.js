// theses are global variable cause we'r going to need them in more than one function
let totalIncome;
let foodCost;
let rentCost;
let clothsCost;
let remainingBalance;
let saveTarget


// expenses & remaining calculation
function calculateExpenses() {
    // taking user input value
    totalIncome = parseFloat(document.getElementById("income").value);
    foodCost = parseFloat(document.getElementById("food").value);
    rentCost = parseFloat(document.getElementById("rent").value);
    clothsCost = parseFloat(document.getElementById("cloths").value);


    // calculating  expenses and remaining
    let totalExpenses = foodCost + rentCost + clothsCost;
    remainingBalance = totalIncome - totalExpenses;

    // showing the results to the user
    document.getElementById("monthly-balance").innerHTML = totalIncome;
    document.getElementById("total-expenses").innerHTML = totalExpenses;
    document.getElementById("remaining-balance").innerHTML = remainingBalance;
}

function calculateSave() {
    // taking user input value
    saveTarget = document.getElementById("save-target-amount").value;

    // calculating save and remainig 
    let savedAmount = totalIncome * saveTarget / 100;
    let afterSave = remainingBalance - savedAmount;

    // showing the results to the user
    document.getElementById("saved-amount").innerHTML = savedAmount;
    document.getElementById("after-save-balance").innerHTML = afterSave;
}