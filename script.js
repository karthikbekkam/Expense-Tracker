let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if (title === "" || amount === "") {
        alert("Please enter valid details");
        return;
    }

    const expense = {
        date: new Date().toLocaleDateString(),
        title: title,
        amount: parseFloat(amount)
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";

    displayExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((exp, index) => {
        total += exp.amount;

        expenseList.innerHTML += `
            <tr>
                <td>${exp.date}</td>
                <td>${exp.title}</td>
                <td>₹${exp.amount}</td>
                <td>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

displayExpenses();
