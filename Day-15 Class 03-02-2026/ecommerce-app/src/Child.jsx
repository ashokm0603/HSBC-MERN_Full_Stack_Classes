import React from "react";

const Child = (props) => {
  return (
    <div>
      <p>name: {props.userDetails.name}</p>
      <p>Role: {props.userDetails.role}</p>

      <p>
        Skills :{" "}
        <ol>
          {props.skills.map((val, ind) => (
            <li>{val}</li>
          ))}
        </ol>
      </p>
    </div>
  );
};

export default Child;
