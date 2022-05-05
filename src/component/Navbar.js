import React from "react";

function navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            MARS E-Learning
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/">
                Register
              </a>
              <a class="nav-link" href="/login">
                Sign in
              </a>
              {/* <a class="nav-link">My account</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;