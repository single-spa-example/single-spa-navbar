import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles.css";

export default (props) => {
  return (
    <BrowserRouter>
      <section>
        <h1>Single Spa App</h1>
        <div className="headerLinks">
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
          <Link to="/login">Login</Link>
        </div>
      </section>
    </BrowserRouter>
  );
};
