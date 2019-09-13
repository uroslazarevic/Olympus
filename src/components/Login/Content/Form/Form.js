import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form";

import { REG_USER, LOGIN_USER } from "mutations/auth";
import { signIn, signUp } from "actions";
import { LoginForm, RegisterForm } from "components";

const Form = (props) => {
  const [selectedForm, setSelectedForm] = useState("loginForm");
  const [msg, setMsg] = useState("");
  const [registerUser, { data: regData }, error] = useMutation(REG_USER);
  const [loginUser, { data: loginData }] = useMutation(LOGIN_USER);

  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    try {
      if (selectedForm === "loginForm") {
        const response = await loginUser({ variables: { ...formValues } });
        setMsg("Login successfull!");
        setTimeout(() => {
          props.signIn(response);
        }, 3000);
      }
      if (selectedForm === "registerForm") {
        const response = await registerUser({
          variables: { ...formValues, isAdmin: false },
          operationName: "register",
        });
        setMsg("Registration successfull!");
        console.log("response", response);
        setTimeout(() => {
          props.signUp(formValues);
          setSelectedForm("loginForm");
        }, 3000);
      }
      return;
    } catch (err) {
      const [errors] = err.graphQLErrors;
      console.log("validation errors", errors);
      return { errors };
    }
  };

  return (
    <div className="form">
      <div className="select-form-btns">
        <span
          onClick={() => setSelectedForm("loginForm")}
          className={`login-form-btn ${selectedForm === "loginForm" ? "active-item" : ""}`}
        >
          <i className="fas fa-adjust" />
        </span>
        <span
          onClick={() => setSelectedForm("registerForm")}
          className={`register-form-btn ${selectedForm === "registerForm" ? "active-item" : ""}`}
        >
          <i className="fas fa-adjust" />
        </span>
      </div>
      <div className="content">
        {selectedForm === "loginForm" && (
          <LoginForm msg={msg} showRegisterForm={() => setSelectedForm("registerForm")} onSubmit={onSubmit} />
        )}
        {selectedForm === "registerForm" && <RegisterForm msg={msg} onSubmit={onSubmit} />}
      </div>
    </div>
  );
};

export default connect(
  null,
  { signIn, signUp }
)(Form);
