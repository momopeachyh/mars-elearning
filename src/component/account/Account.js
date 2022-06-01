import React from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router";

function Account() {
  const navigate = useNavigate();

  function goToUpdateAcct() {
    navigate("/updateAccount");
  }

  function goToDeleteAcct() {
    navigate("/deleteAccount");
  }

  return (
    <div className="Account">
      <Navbar />
      <div className="">
        <h1>My account</h1>
        <h2>Username: username</h2>
        <h2>Password: pass****</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={goToUpdateAcct}
        >
          Change username or password
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={goToDeleteAcct}
        >
          Delete account
        </button>
      </div>
    </div>
  );
}

export default Account;
