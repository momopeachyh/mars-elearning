import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/Action";
import { useNavigate } from "react-router";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      userName: username,
      password: password,
    };
    if (username == null || password == null) {
      alert("Please enter the missing value.");
    } else {
      dispatch(registerUser(postData));
      navigate("/registered");
    }
  };

  return (
    <div className="Register">
      <Navbar />
      <div className="body">
        <h1>Register Now!</h1>
        <form>
          {/* <div className="mb-3">
            <label for="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-3">
            <label for="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
            />
          </div> */}
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Create a username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
