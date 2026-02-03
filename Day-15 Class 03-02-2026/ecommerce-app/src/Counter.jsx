import React from "react";
import { useState } from "react";
import "./Counter.css"
const Counter = () => {

    const [number, setNumber]=useState(0);

  return (
    <div id="counter-container">
      <h1 >Counter APP</h1>

      <h2>Number : {number}</h2>
      <button onClick={()=>{
        setNumber(number+1)
      }}>Increment</button>

      <button onClick={()=>{
        setNumber(number-1)
      }}>Decrement</button>
    </div>
  );
};

export default Counter;
