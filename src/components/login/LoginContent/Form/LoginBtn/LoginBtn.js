import React from "react";

const LoginBtn = ({ text, icon, btnClass, name }) => {
  if (icon) {
    return (
      <button name={name} className={`login-btn ${btnClass}`}>
        <span>{icon}</span>
        {text}
      </button>
    );
  }
  return (
    <button name={name} className={`login-btn ${btnClass}`}>
      {text}
    </button>
  );
};

export default LoginBtn;
