import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
function ExpenseItems(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default ExpenseItems;
