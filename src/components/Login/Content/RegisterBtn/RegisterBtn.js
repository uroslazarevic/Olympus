import React from "react";

class RegisterBtn extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="register-btn">
        Register Now!
      </button>
    );
  }
}

export default RegisterBtn;
