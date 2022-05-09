import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./newExpenseUI/ExpenseFilter";
import { useState } from "react";
function ExpenseItems(props) {
  const [date, setTheDate] = useState("Select a year");
  const [expensesItem, setExpensesItems] = useState(props.expensesItems);
  const getSelectedDate = (selectedDate) => {
    setTheDate(selectedDate);
    if (selectedDate != "") {
      setExpensesItems(
        props.expensesItems.filter(
          (expense) => expense.date.getFullYear() == selectedDate
        )
      );
    }else{
      setExpensesItems(props.expensesItems);
    }
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentDate={date}
        onChangeSelectedDate={getSelectedDate}
      ></ExpensesFilter>
      {expensesItem.length==0?(<p>No expenses found</p>):(expensesItem.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      )))}
    </Card>
  );
}

export default ExpenseItems;
