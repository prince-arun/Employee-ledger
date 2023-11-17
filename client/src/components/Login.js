import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1>Welcome to Login Page</h1>
      <div className="container">
        <form>
          <p>
            <label htmlFor="email">Email</label> {"   "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </p>
          <p>
            <label htmlFor="password">Password</label> {"   "}
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
