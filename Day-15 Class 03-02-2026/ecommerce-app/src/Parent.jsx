import React from "react";
import Child from "./Child";
const Parent = () => {
  const user = {
    name: "Sai",
    role: "developer",
  };
  return (
    <div>
      <Child userDetails={user} skills={["html", "css","js"]}/>
    </div>
  );
};

export default Parent;
