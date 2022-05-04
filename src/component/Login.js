import React from "react";

function Login() {
  return (
    <div className="Login">
      <form>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
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
            placeholder="Another input placeholder"
          />
        </div>

        <button type="button" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Login;
