import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  //   const [title, getTheTitle] = useState("");
  //   const [amount, getTheAmount] = useState("");
  //   const [date, getTheDate] = useState("");
  const [newExpense, setTheNewExpense] = useState(false);
  const [userInputs, setUserInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChange = (event) => {
    // setUserInputs({
    //   ...userInputs,
    //   title: event.target.value,
    // });
    setUserInputs((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const amountChange = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const dateChange = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };
  const buttonChanger = (event) => {
    event.preventDefault();

    console.log(userInputs);
    props.onSaveExpenseData(userInputs);
    setUserInputs((prevState) => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  };
  const onSubmit = () => {
    setTheNewExpense(true);
  };
  const onSubmitFalse = () => {
    setTheNewExpense(false);
  };
  return (
    <div>
      {newExpense == false ? (
        <div className="new-expense__actions">
          <button
            onClick={onSubmit}
            className="AddNewExpense"
            type="button"
          >
            Add New Expense
          </button>
        </div>
      ) : (
        <form onSubmit={buttonChanger}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> Title</label>
              <input
                type="text"
                value={userInputs.title}
                onChange={titleChange}
              />
            </div>
            <div className="new-expense__control">
              <label> Amount</label>
              <input
                type="number"
                min="0.01"
                value={userInputs.amount}
                step="0.01"
                onChange={amountChange}
              />
            </div>
            <div className="new-expense__control">
              <label> Date</label>
              <input
                type="date"
                value={userInputs.date}
                min="2019-01-01"
                max="2022-12-3"
                onChange={dateChange}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button  onClick={onSubmitFalse} type="button">
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
