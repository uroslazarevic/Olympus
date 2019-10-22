import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
// Mutations
import { REG_USER, LOGIN_USER } from "mutations/auth";
// Actions
import { signIn, signUp } from "actions";
// Components
import { LoginForm, RegisterForm } from "components";

const Form = (props) => {
  const [msg, setMsg] = useState("");
  const [registerUser] = useMutation(REG_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const { selectedForm, setSelectedForm } = props;

  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    try {
      if (selectedForm === "loginForm") {
        let redirectPage;
        const response = await loginUser({ variables: { ...formValues } });
        const { name, pseudonym, avatar } = response.data.login.profileSettings;
        if (!name || !pseudonym || !avatar) {
          setMsg("Configure your profile");
          redirectPage = "/profile/settings";
        } else {
          setMsg("Login successfull!");
          redirectPage = "/profile";
        }
        setTimeout(() => {
          props.signIn(response, redirectPage);
        }, 2000);
      }
      if (selectedForm === "registerForm") {
        const response = await registerUser({
          variables: { ...formValues, isAdmin: false },
          operationName: "register",
        });
        setMsg("Registration successfull!");
        setTimeout(() => {
          props.signUp(response.data.register.id);
        }, 2000);
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
