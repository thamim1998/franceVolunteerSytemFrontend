import React, { useState } from "react";
import './LoginComponent.css';

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid text-center">
      <div className="container">
        <h4 className="p-5">France Volunteer Administration System</h4>
        <h1 className="p-3">Sign in</h1>
        <h6 className="p-3 mb-4">Sign in and start managing the Volunteer</h6>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Login"
              value={email}
              className='input-email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              value={password}
              className='input-password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            {/* <button className="button-68" type="submit">Login</button> */}
            <button className="button">Login</button>
          </form>
          <a href="#react">Forgot Password? </a>
        </div>
      </div>
    </div>
  );
}
