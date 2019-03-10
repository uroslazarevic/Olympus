import React from "react";
import { connect } from "react-redux";

import { signIn } from "actions";
import { LoginForm } from "components";

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

export default connect(
  null,
  { signIn }
)(Form);
