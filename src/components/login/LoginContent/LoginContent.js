import React from "react";

import { Greetings, RegisterBtn, Form } from "components";

const LoginContent = () => {
  return (
    <div className="login-content">
      <div className="aside-left">
        <Greetings />
        <RegisterBtn />
      </div>
      <div className="aside-right">
        <Form />
      </div>
    </div>
  );
};

export default LoginContent;
