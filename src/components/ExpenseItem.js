import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTheTitle] = useState(props.title);
  const clickHand = ()=>{
    setTheTitle("${props.title}");
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHand}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
