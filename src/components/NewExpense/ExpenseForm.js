import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-31"
            ></input>
          </div>
          <div className="new-expense__actions">
            <button>Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
