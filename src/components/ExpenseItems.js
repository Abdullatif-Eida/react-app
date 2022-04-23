import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./newExpenseUI/ExpenseFilter";
import { useState } from "react";
function ExpenseItems(props) {
  const [date, setTheDate] = useState("2022");
  const getSelectedDate = (selectedDate)=>{
    setTheDate(selectedDate);
    console.log(date);
  }

  return (
      <Card className="expenses">
      <ExpensesFilter currentDate={date} onChangeSelectedDate={getSelectedDate}></ExpensesFilter>
        <ExpenseItem
          title={props.expensesItems[0].title}
          amount={props.expensesItems[0].amount}
          date={props.expensesItems[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesItems[1].title}
          amount={props.expensesItems[1].amount}
          date={props.expensesItems[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesItems[2].title}
          amount={props.expensesItems[2].amount}
          date={props.expensesItems[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesItems[3].title}
          amount={props.expensesItems[3].amount}
          date={props.expensesItems[3].date}
        ></ExpenseItem>
      </Card>
  );
}

export default ExpenseItems;
