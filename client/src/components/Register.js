import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  //State variables for Reg Data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", { name, email, password })
      .then((res) => {
        console.log(res.data);
        alert("register successful");
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="register d-flex">
      <h1>Welcome to Register Page</h1>
      <div className="container ">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Full Name</label> {"   "}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Full name"
              onChange={(e) => setName(e.target.value)}
            />
          </p>
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

export default Register;
