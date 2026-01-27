import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);

    setRegisterDetails({
      fname: "",
      email: "",
      phone: "",
      password: "",
    });
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
    </>
  );
};

export default Register;
