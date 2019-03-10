import React from "react";

import { LoginForm } from "components";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectForm: true
    };
  }

  onSubmit = formValues => {
    console.log("formValues", formValues);
  };

  render() {
    return (
      <div className="form">
        <div className="select-form-btns">
          <span className="login-form-btn active-form">
            <i className="fas fa-adjust" />
          </span>
          <span className="register-form-btn">
            <i className="fas fa-adjust" />
          </span>
        </div>
        <div className="content">
          <LoginForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Form;
