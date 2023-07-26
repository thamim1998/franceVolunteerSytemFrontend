import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import axios from "axios";
import { useAuth } from "../../utils/Auth";
import { config } from "../../utils/Config";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedFailed, setLoggedfailed] = useState(false)
  const auth = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    // http://localhost:8080/frvol/auth/signin

    const verified = { email, password };

    axios
      .post(config.BASE_URL+'auth/signin', verified)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Successful") {
          auth.login(response.data);
         navigate("/volunteer/list", {replace:true})
         localStorage.setItem('token', response.data.token)
         localStorage.setItem('userId', response.data.userId)
        } else {
          alert("Login failed");
        }
      })
      .catch((error) => {
        alert("please your check username and password");
      });
  };

  return (
    <div className="container-fluid login-component text-center">
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
              className="input-email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              value={password}
              className="input-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button className="button">Login</button>
          </form>
          <Link to="#react">Forgot Password? </Link>
        </div>
      </div>
    </div>
  );
}
