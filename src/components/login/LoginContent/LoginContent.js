import React from "react";

import { Greetings, RegisterBtn } from "components";

const LoginContent = () => {
  return (
    <div className="login-content">
      <div className="aside-left">
        <Greetings />
        <RegisterBtn />
      </div>
      <div className="aside-right">Login Form</div>
    </div>
  );
};

export default LoginContent;
