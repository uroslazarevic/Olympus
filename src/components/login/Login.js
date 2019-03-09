import React from "react";

import backgroundImg from "../../imgs/login_background.jpg";

import { LoginHeader, LoginContent } from "components";

const Login = () => {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url("${backgroundImg}")` }}
    >
      <div className="bg-layer">
        <div className="container">
          <LoginHeader />
          <LoginContent />
        </div>
      </div>
    </div>
  );
};

export default Login;
