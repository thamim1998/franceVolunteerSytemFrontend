import React, { useState } from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./CreateAccount.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);

    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="create-account">
      <div>
        {" "}
        <SidebarComponent />{" "}
      </div>
      <div className="container">
        <div className="account-form mt-5">
          <div className="centered-input">
            <h4>Create Admin Account</h4>
            <p>All field are required</p>
            <form onSubmit={handleSubmit}>
              <div className="form-details p-3">
                <p>User name</p>
                <input
                  type="text"
                  value={username}
                  className="input-username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-details p-3">
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  className="input-email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-details p-3">
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  className="input-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="create-button mt-2">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
