import React from "react";
import { connect } from "react-redux";

import { signIn } from "actions";
import { LoginForm, RegisterForm } from "components";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForm: "loginForm"
    };
  }

  onSubmit = formValues => {
    console.log("formValues", formValues);
    this.props.signIn();
  };

  showRegisterForm = () => {
    this.setState({ selectedForm: "registerForm" });
  };

  render() {
    const { selectedForm } = this.state;

    return (
      <div className="form">
        <div className="select-form-btns">
          <span
            onClick={() => this.setState({ selectedForm: "loginForm" })}
            className={`login-form-btn ${
              selectedForm === "loginForm" ? "active-item" : ""
            }`}
          >
            <i className="fas fa-adjust" />
          </span>
          <span
            onClick={() => this.setState({ selectedForm: "registerForm" })}
            className={`register-form-btn ${
              selectedForm === "registerForm" ? "active-item" : ""
            }`}
          >
            <i className="fas fa-adjust" />
          </span>
        </div>
        <div className="content">
          {this.state.selectedForm === "loginForm" && (
            <LoginForm
              showRegisterForm={this.showRegisterForm}
              onSubmit={this.onSubmit}
            />
          )}
          {this.state.selectedForm === "registerForm" && <RegisterForm />}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { signIn }
)(Form);
