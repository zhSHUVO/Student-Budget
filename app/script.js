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

    if (isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothsCost) || totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothsCost < 0) {
        document.getElementById("income").classList.add("border", "border-danger");
        document.getElementById("food").classList.add("border", "border-danger");
        document.getElementById("rent").classList.add("border", "border-danger");
        document.getElementById("cloths").classList.add("border", "border-danger");
        document.getElementById("expense-validation-check").style.display = "block";
    }

    else {
        // calculating  expenses and remaining
        let totalExpenses = foodCost + rentCost + clothsCost;
        remainingBalance = totalIncome - totalExpenses;

        // removing error messages
        document.getElementById("income").classList.remove("border", "border-danger");
        document.getElementById("food").classList.remove("border", "border-danger");
        document.getElementById("rent").classList.remove("border", "border-danger");
        document.getElementById("cloths").classList.remove("border", "border-danger");
        document.getElementById("validation-check").style.display = "none";

        // showing the results to the user
        document.getElementById("monthly-balance").innerHTML = totalIncome;
        document.getElementById("total-expenses").innerHTML = totalExpenses;
        document.getElementById("remaining-balance").innerHTML = remainingBalance;
    }
}

function calculateSave() {
    // taking user input value
    saveTarget = document.getElementById("save-target-amount").value;

    if (isNaN(saveTarget) || saveTarget < 0) {
        document.getElementById("save-target-amount").classList.add("border", "border-danger");
        document.getElementById("save-validation-check").style.display = "block";
    }

    else {
        // calculating save and remainig 
        let savedAmount = totalIncome * saveTarget / 100;
        let afterSave = remainingBalance - savedAmount;

        // removing error messages
        document.getElementById("save-target-amount").classList.remove("border", "border-danger");
        document.getElementById("save-validation-check").style.display = "none";

        // showing the results to the user
        document.getElementById("saved-amount").innerHTML = savedAmount;
        document.getElementById("after-save-balance").innerHTML = afterSave;
    }
}