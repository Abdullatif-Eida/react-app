import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  //   const [enteredTitle, getTheTitle] = useState("");
  //   const [enteredAmount, getTheAmount] = useState("");
  //   const [enteredDate, getTheDate] = useState("");
  const [userInputs, setUserInputs] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChange = (event) => {
    // setUserInputs({
    //   ...userInputs,
    //   enteredTitle: event.target.value,
    // });
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChange = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChange = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredDate:Date( event.target.value),
      };
    });
  };
  const buttonChanger = (event) => {
      event.preventDefault();

    console.log(userInputs);
    props.onSaveExpenseData(userInputs);
    setUserInputs((prevState) => {
        return {
          enteredTitle:'',
          enteredAmount:'',
          enteredDate: '',
        };
      });
  };
  return (
    <form onSubmit={buttonChanger} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" value={userInputs.enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input type="number" min="0.01"  value={userInputs.enteredAmount}  step="0.01" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            value={userInputs.enteredDate}
            min="2019-01-01"
            max="2022-12-3"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
