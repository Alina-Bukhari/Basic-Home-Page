import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <section className="navbar">
        <Link to="/" className="navbar-item" id="one">
          Home
        </Link>
        <Link to="/About" className="navbar-item" id="one">
          About
        </Link>
        <section className="navbar-item">Portfolio</section>
        <section className="navbar-item">Shop</section>
        <section className="navbar-item">Blog</section>
        <Link to="/Contact" className="navbar-item" id="one">
          Contact
        </Link>
      </section>
    </div>
  );
}

export default Navbar;
