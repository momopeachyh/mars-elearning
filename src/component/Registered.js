import React from "react";
import Navbar from "./Navbar";
// import { useSelector } from "react-redux";

function Registered() {
  // const username = useSelector((state) => state.);

  return (
    <div className="Registered">
      <Navbar />
      <div className="body">
        <h1>Welcome, username. Thank you for registering.</h1>
      </div>
    </div>
  );
}

export default Registered;
