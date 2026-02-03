import React, { use, useMemo, useState } from "react";

const WithOutUseMemo = () => {
  const [fact, setFact] = useState(1);

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  // calculating factorial using with out useMemo
//   const factorial = (number) => {
//     console.log("Calculating.......");

//     //5 => 5*4*3*2*1
//     let initialFact = 1;
//     for (let i = number; i >= 1; i--) {
//       initialFact *= i;
//     }

//     setFact(initialFact);
//   };


// calculating factorial using useMemo
const factorial=useMemo(()=>{
    console.log("Calculating.......");

    //5 => 5*4*3*2*1
    let initialFact = 1;
    for (let i = number; i >= 1; i--) {
      initialFact *= i;
    }

    setFact(initialFact);
}, [number])

  return (
    <div>
      <h1>Factorial : {factorial} {fact}</h1>

      <input
        type="number"
        placeholder="Enter Numbers"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here count: {count}
      </button>
    </div>
  );
};

export default WithOutUseMemo;
