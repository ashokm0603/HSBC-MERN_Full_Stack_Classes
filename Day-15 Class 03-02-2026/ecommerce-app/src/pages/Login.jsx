import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {useNavigate} from "react-router-dom"
export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const navigate=useNavigate()

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      console.log(loginDetails);

      const response=await axios.post("http://localhost:4000/api/login",loginDetails)
      toast.success("Login Successfully")
      setLoginDetails({
        username: "",
        password: "",
      });


      setTimeout(()=>{
        navigate("/addproduct")
      },2000)


    } catch (error) {
      console.log(error);
      toast.error("failed to login")
      
    }
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <div id="register-container">
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <h1>Login Page</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter email"
            required
            onChange={handleChange}
            value={loginDetails.username}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="admin@123"
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">Sign-In</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>

      <ToastContainer/>
    </div>
  );
};
