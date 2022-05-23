import React from "react";
import Navbar from "../Navbar";
import "../style.css";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function Login() {
  return (
    <div className="Login">
      <Navbar />
      <div className="body">
        <h1>Sign in here</h1>
        <form className="form">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your username"
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            // onClick={loginToAcct}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
