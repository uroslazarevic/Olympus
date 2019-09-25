import React, { useState } from "react";

import { Greetings, RegisterBtn, Form } from "components";

const Content = () => {
  const [selectedForm, setSelectedForm] = useState("loginForm");

  return (
    <div className="login-content">
      <div className="aside-left">
        <Greetings />
        <RegisterBtn onClick={() => setSelectedForm("registerForm")} />
      </div>
      <div className="aside-right">
        <Form selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
      </div>
    </div>
  );
};

export default Content;
