import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <h1>Welcome to the home page.</h1>
      <h2>Please sign in or create an account.</h2>
    </div>
  );
}

export default Home;
