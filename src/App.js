import "./styles.css";
import "./components/Expense-date.css";
import "./components/ExpenseItem.css";
import "./components/NewExpense/ExpenseForm.css";
import "./components/NewExpense/NewExpense.css";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 13.21,
      date: new Date(2022, 6, 5),
    },
    {
      id: "e2",
      title: "TV",
      amount: 133.45,
      date: new Date(2022, 6, 4),
    },
    {
      id: "e3",
      title: "Car",
      amount: 515.77,
      date: new Date(2022, 6, 1),
    },
  ]);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandluer = (e) => {
    setEnteredDate(e.target.value);
  };

  const clickHandler = () => {
    alert("변경 완료!");
  };
  return (
    <div className="main-container">
      <ExpenseForm />
      <div className="App">
        {items.map((name, i) => {
          return (
            <div className="expenses">
              <div className="expense-item">
                <div>
                  <ExtenseDate date={name.date} />
                </div>
                <div className="expense-item__description">
                  <h2>{name.title}</h2>
                  <div className="expense-item__price"> ${name.amount} </div>
                  <button onClick={clickHandler}>변경</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ExtenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

// const submitHandler = () => {
//   title: enteredTitle;
// };
