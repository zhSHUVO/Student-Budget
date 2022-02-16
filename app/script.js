

// expenses & remaining calculation
function calculateExpenses() {
    // taking user values
    let totalIncome = parseFloat(document.getElementById("income").value);
    let foodCost = parseFloat(document.getElementById("food").value);
    let rentCost = parseFloat(document.getElementById("rent").value);
    let clothsCost = parseFloat(document.getElementById("cloths").value);

    // calculating  expenses and remaining
    let totalExpenses = foodCost + rentCost + clothsCost;
    let remainingBalance = totalIncome - totalExpenses;

    // showing the results to the user
    document.getElementById("monthly-balance").innerHTML = totalIncome;
    document.getElementById("total-expenses").innerHTML = totalExpenses;
    document.getElementById("remaining-balance").innerHTML = remainingBalance;

    // cleaning the input fields
    document.getElementById("income").value = "";
    document.getElementById("food").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("cloths").value = "";

}

