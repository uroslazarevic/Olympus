import React from "react";

class RegisterBtn extends React.Component {
  handleRegister() {
    console.log("Register user");
  }

  render() {
    return (
      <button onClick={this.handleRegister} className="register-btn">
        Register Now!
      </button>
    );
  }
}

export default RegisterBtn;
