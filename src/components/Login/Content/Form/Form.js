import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
// Mutations
import { REG_USER, LOGIN_USER } from "mutations/auth";
// Actions
import { signIn, signUp } from "actions";
// Components
import { LoginForm, RegisterForm } from "components";
// Utilis
import { history } from "utilis";

const Form = (props) => {
  const [selectedForm, setSelectedForm] = useState("loginForm");
  const [msg, setMsg] = useState("");
  const [registerUser] = useMutation(REG_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    try {
      if (selectedForm === "loginForm") {
        const response = await loginUser({ variables: { ...formValues } });
        const { name, pseudonym, avatar } = response.data.login.user;
        if (!name || !pseudonym || !avatar) {
          setMsg("Configure your profile");
          setTimeout(() => {
            history.push("/profile/settings", { id: response.data.login.userData.id });
          }, 2000);
          return;
        }
        setMsg("Login successfull!");
        setTimeout(() => {
          props.signIn(response);
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
