import ExpenseItems from "./components/ExpenseItems";
import NewExp from "./components/newExpenseUI/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const getExpenseData= expenseData =>{
    console.log("from main file");
    console.log(expenseData);
  };
  return (
    <div>
      <NewExp onDataSubmitted={getExpenseData}/>
      <ExpenseItems expensesItems={expenses}></ExpenseItems>
    </div>
  );
};

export default App;
