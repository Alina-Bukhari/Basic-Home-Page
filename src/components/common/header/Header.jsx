// import React from "react";
import React, { useState } from "react";

import { Navbar } from "../../common";

import "./Header.css";

function Header(prop) {
  const [count, setCount] = useState(0);

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            FORAY
          </a>
          <h1 style={{ padding: 10, marginLeft: 300 }}> {prop.text}</h1>
          <br />
          <h2 style={{ padding: 10 }}> {prop.data_obj}</h2>
          <h1> You hit {count} times</h1>
          <button onClick={() => setCount(count + 1)}>Update</button>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Header;
