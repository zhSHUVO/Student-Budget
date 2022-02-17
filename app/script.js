// theses are global variable cause we'r going to need them in more than one function
let totalIncome;
let foodCost;
let rentCost;
let clothsCost;
let remainingBalance;
let saveTarget

let letters = /[A-Za-z]/g;

// expenses & remaining calculation
function calculateExpenses() {
    // taking user input value
    totalIncome = document.getElementById("income").value;
    foodCost = document.getElementById("food").value;
    rentCost = document.getElementById("rent").value;
    clothsCost = document.getElementById("cloths").value;

    // input validation for number and negative value
    if (totalIncome.match(letters) || foodCost.match(letters) || rentCost.match(letters) || clothsCost.match(letters) || totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothsCost < 0) {

        // error messages
        document.getElementById("income").classList.add("border", "border-danger");
        document.getElementById("food").classList.add("border", "border-danger");
        document.getElementById("rent").classList.add("border", "border-danger");
        document.getElementById("cloths").classList.add("border", "border-danger");
        document.getElementById("expense-validation-check").style.display = "block";

        // cleaning the outputs
        document.getElementById("monthly-balance").innerHTML = " 0 ";
        document.getElementById("total-expenses").innerHTML = " 0 ";
        document.getElementById("remaining-balance").innerHTML = " 0 ";

    }

    else {
        // calculating  expenses and remaining
        let totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothsCost);
        remainingBalance = parseFloat(totalIncome) - parseFloat(totalExpenses);

        // removing error messages
        document.getElementById("income").classList.remove("border", "border-danger");
        document.getElementById("food").classList.remove("border", "border-danger");
        document.getElementById("rent").classList.remove("border", "border-danger");
        document.getElementById("cloths").classList.remove("border", "border-danger");
        document.getElementById("expense-validation-check").style.display = "none";

        // over expenses check
        if (totalExpenses > totalIncome) {
            document.getElementById("over-expenses-check").style.display = "block";
        }

        // showing the results to the user
        document.getElementById("monthly-balance").innerHTML = totalIncome;
        document.getElementById("total-expenses").innerHTML = totalExpenses;
        document.getElementById("remaining-balance").innerHTML = remainingBalance;
    }
}

// save
function calculateSave() {
    // taking user input value
    saveTarget = document.getElementById("save-target-amount").value;

    // input validation for number and negative value
    if (saveTarget.match(letters) || saveTarget < 0) {

        // error messages
        document.getElementById("save-target-amount").classList.add("border", "border-danger");
        document.getElementById("save-validation-check").style.display = "block";

        // cleaning the outputs
        document.getElementById("saved-amount").innerHTML = " 0 ";
        document.getElementById("after-save-balance").innerHTML = " 0 ";
    }

    else {
        // calculating save and remainig 
        let savedAmount = parseFloat(totalIncome) * parseFloat(saveTarget) / 100;
        let afterSave = parseFloat(remainingBalance) - parseFloat(savedAmount);

        // removing error messages
        document.getElementById("save-target-amount").classList.remove("border", "border-danger");
        document.getElementById("save-validation-check").style.display = "none";

        // over saving check
        if (savedAmount > remainingBalance) {
            document.getElementById("over-save-check").style.display = "block";
        }

        // showing the results to the user
        document.getElementById("saved-amount").innerHTML = savedAmount;
        document.getElementById("after-save-balance").innerHTML = afterSave;
    }
}