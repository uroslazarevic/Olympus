import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../imgs/olympus_logo.png";

const LoginHeader = () => {
  return (
    <div className="login-header">
      <Link to="/">
        <img className="logo-img" src={logo} alt="olympus-logo" />
        <span className="logo-name">olympus</span>
      </Link>
      <span className="hamburger">
        <i className="fas fa-bars" />
      </span>
    </div>
  );
};

export default LoginHeader;
