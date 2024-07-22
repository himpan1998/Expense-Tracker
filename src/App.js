import React, { useState } from "react";
import "./App.css";
function App() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState([]);
  const addExpense = () => {
    if (!expense || !amount) return;
    const newExpense = {
      id: expenses.length + 1,
      tittle: expense,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setExpense("");
    setAmount("");
  };

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };
  return (
    <div className="main">
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.tittle}</span>
            <span>{expense.amount}</span>
            <button onClick={() => deleteItem(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
