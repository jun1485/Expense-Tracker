import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <button className="btn-11">${props.amount}</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
