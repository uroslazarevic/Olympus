import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { FormField } from "components";
import { validateForm } from "utilis";

class RegisterForm extends React.Component {
  onSubmit = async (formValues) => {
    const response = await this.props.onSubmit(formValues);
    if (!response) return;
    if (response.errors) {
      const { error, path } = response.errors;
      throw new SubmissionError({ [path]: error, _error: error });
    }
  };

  render() {
    const { error } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="register-form">
        <div className="form-label">
          {this.props.msg ? <span style={{ color: "green" }}>{this.props.msg}</span> : "Register an a Account"}
        </div>
        <div className="register-form-content">
          <Field name="username" type="text" label="Your fullname" component={FormField} />
          <Field name="email" type="text" label="Your email" component={FormField} />
          <Field name="password" type="password" label="Your password" component={FormField} />
          {error && <strong>{error}</strong>}
          <button name="register" className="ui-btn register">
            Register
          </button>

          <div className="notation">
            By creating an account, you agree to Olympus's <span className="accent">Terms of Service</span>,{" "}
            <span className="accent">Cookie Policy</span>, <span className="accent">Privacy Policy</span> and{" "}
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
    username: "",
    password: "",
    email: "",
  },
})(RegisterForm);
