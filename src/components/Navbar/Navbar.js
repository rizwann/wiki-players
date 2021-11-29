import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick and Morty <span className="text-primary">WiKi</span>{" "}
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav fs-5">
          <NavLink to="/" className="nav-link active" >
           Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link">
            Episodes
          </NavLink>
          <NavLink to="/location" className="nav-link">
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
