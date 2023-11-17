import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Success") {
          alert("Login successful");
          navigate("/home");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <h1>Welcome to Login Page</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email">Email</label> {"   "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password</label> {"   "}
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
