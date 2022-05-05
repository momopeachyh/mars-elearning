import React from "react";
import Navbar from "./Navbar";
import "./style.css";

function Register() {
  return (
    <div className="Register">
      <Navbar />
      <div className="body">
        <form>
          <div class="mb-3">
            <label for="firstName" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Create a username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
