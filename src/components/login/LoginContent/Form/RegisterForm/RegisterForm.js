import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormField, LoginBtn } from "components";
import { validateForm } from "utilis";

class RegisterForm extends React.Component {
  render() {
    return (
      <form className="register-form">
        <div className="form-label">Register an a Account</div>
        <div className="register-form-content">
          <Field
            name="fullname"
            type="text"
            label="Your fullname"
            component={FormField}
          />
          <Field
            name="email"
            type="text"
            label="Your email"
            component={FormField}
          />
          <Field
            name="password"
            type="password"
            label="Your password"
            component={FormField}
          />
          <LoginBtn
            name="register"
            text="Register"
            btnClass="register"
            disabled={true}
          />

          <div className="notation">
            By creating an account, you agree to Olympus's{" "}
            <span className="accent">Terms of Service</span>,{" "}
            <span className="accent">Cookie Policy</span>,{" "}
            <span className="accent">Privacy Policy</span> and{" "}
            <span className="accent">Content Policies</span>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "registerForm",
  validate: validateForm,
  initialValues: {
    fullname: "",
    password: "",
    email: ""
  }
})(RegisterForm);
