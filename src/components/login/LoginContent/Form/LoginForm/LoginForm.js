import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormField, LoginBtn } from "components";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <div className="form-label">Login to your Account</div>
        <div className="login-form-content">
          <Field
            name="email"
            type="text"
            label="Your email"
            component={FormField}
          />
          <Field
            name="password"
            type="text"
            label="Your password"
            component={FormField}
          />
          <div className="additional-options">
            <label>
              <Field name="employed" component="input" type="checkbox" />
              <span>Remember me</span>
            </label>
            <div className="forgot-password">Forgot My Password</div>
          </div>
          <div className="login-btns">
            <LoginBtn name="reg-login" text="Login" btnClass="reg-login" />
            <div className="middle-line">
              <span>OR</span>
            </div>
            <LoginBtn
              name="fb-login"
              icon={<i className="fab fa-facebook-f" />}
              text="Login with Facebook"
              btnClass="fb-login"
            />
            <LoginBtn
              name="tw-login"
              icon={<i className="fab fa-twitter" />}
              text="Login with Twitter"
              btnClass="tw-login"
            />
          </div>
          <div className="notation">
            Don't you have an account?{" "}
            <span className="accent">Register Now!</span> It's simple and you
            can start enjoying all the benefits!{" "}
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginForm"
  // validate
})(LoginForm);
