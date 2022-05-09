import ExpenseForm from "./ExpenseForm";
import "./newExpense.css"
import { useState } from "react";
const NewExp = (props) => {
  const saveExpensesDate = (enteredExpensesData)=>{
      const expenseData = {
          ...enteredExpensesData,
          id:Math.random().toString(),
      }
      console.log(expenseData);
      props.onDataSubmitted(expenseData);
  }

  return (
    <div className="new-expense">

     <ExpenseForm onSaveExpenseData={saveExpensesDate}></ExpenseForm>
   
</div>
  );
};

export default NewExp;
