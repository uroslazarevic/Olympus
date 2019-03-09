import React from "react";

import { LoginForm, RegisterForm } from "components";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginForm: true
    };
  }

  render() {
    return (
      <div className="form">
        <div className="select-form-btns">
          <span className="login-form-btn">
            <i class="fas fa-adjust" />
          </span>
          <span className="register-form-btn">
            <i class="fas fa-adjust" />
          </span>
        </div>
        <div className="content">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Form;
