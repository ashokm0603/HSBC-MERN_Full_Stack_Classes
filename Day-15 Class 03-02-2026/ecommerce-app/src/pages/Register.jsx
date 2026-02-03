import React, { useState } from "react";

import  axios  from "axios";
import { toast , ToastContainer} from "react-toastify";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(registerDetails);
      

      const response = await axios.post(
        "http://localhost:4000/api/register",
        registerDetails,
      );

      localStorage.setItem("Name",registerDetails.fname)
      localStorage.setItem("Email",registerDetails.email)
      toast.success("Register Successfully");

      setRegisterDetails({
        fname: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (err) {
      console.log(err);

      toast.error("failed to register");
    }
  };
  return (
    <>
      <div id="register-container">
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <h1>Sign-In</h1>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={registerDetails.fname}
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerDetails.email}
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={registerDetails.phone}
              onChange={handleChange}
              name="phone"
              placeholder="+91"
              pattern="[6-9]{1}[0-9]{9}"
              required
            />{" "}
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={registerDetails.password}
              onChange={handleChange}
              placeholder="Enter password"
            />{" "}
            <br />
            <br />
            <button type="submit">Register</button>
            <button type="reset">Cancel</button>
          </fieldset>
        </form>
      </div>

      <ToastContainer/>
    </>
  );
};

export default Register;
