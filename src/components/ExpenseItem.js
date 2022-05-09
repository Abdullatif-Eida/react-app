import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "./Card";
// import React, { useState } from "react";

function ExpenseItem(props) {
  // const [title, setTheTitle] = useState(props.title);
  // const clickHand = ()=>{
  //   setTheTitle("${props.title}");
  //   console.log(title);
  // }
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
