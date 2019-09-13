import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { FormField } from "components";
import { Btn as FormBtn } from "components/UI";
import { validateForm } from "utilis";

class LoginForm extends React.Component {
  onSubmit = async (formValues) => {
    const response = await this.props.onSubmit(formValues);
    if (!response) return;
    if (response.errors) {
      const { error, path } = response.errors;
      throw new SubmissionError({ [path]: error, _error: error });
    }
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="login-form">
        <div className="form-label">
          {this.props.msg ? <span style={{ color: "green" }}>{this.props.msg}</span> : "Login to your Account"}
        </div>
        <div className="login-form-content">
          <Field name="email" type="text" label="Your email" component={FormField} />
          <Field name="password" type="password" label="Your password" component={FormField} />
          {this.props.error && <strong>{this.props.error}</strong>}
          <div className="additional-options">
            <label>
              <Field name="rememberLoginedUser" component="input" type="checkbox" />
              <span>Remember me</span>
            </label>
            <div className="forgot-password">Forgot My Password</div>
          </div>
          <div className="login-btns">
            <FormBtn name="reg-login" text="Login" btnClass="reg-login" />
            <div className="middle-line">
              <span>OR</span>
            </div>
            <FormBtn
              name="fb-login"
              icon={<i className="fab fa-facebook-f" />}
              text="Login with Facebook"
              btnClass="fb-btn"
            />
            <FormBtn
              name="tw-login"
              icon={<i className="fab fa-twitter" />}
              text="Login with Twitter"
              btnClass="tw-btn"
            />
          </div>
          <div className="notation">
            Don't you have an account?{" "}
            <span className="accent" onClick={this.props.showRegisterForm}>
              Register Now!
            </span>{" "}
            It's simple and you can start enjoying all the benefits!{" "}
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginForm",
  validate: validateForm,
  initialValues: {
    password: "",
    email: "",
    rememberLoginedUser: false,
  },
})(LoginForm);
