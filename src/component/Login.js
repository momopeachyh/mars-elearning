import React from "react";
import Navbar from "./Navbar";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <Navbar />
      <div className="login-body">
        <form className="form">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter a username"
            />
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter a password"
            />
          </div>

          <button type="button" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
