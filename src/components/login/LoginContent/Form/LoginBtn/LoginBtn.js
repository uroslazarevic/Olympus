import React from "react";

const FormBtn = ({ text, icon, btnClass, name, disabled }) => {
  if (icon) {
    return (
      <button
        name={name}
        disabled={disabled}
        className={`form-btn ${btnClass} ${disabled ? "btn-disabled" : ""}`}
      >
        <span>{icon}</span>
        {text}
      </button>
    );
  }
  return (
    <button
      name={name}
      disabled={disabled}
      className={`form-btn ${btnClass} ${disabled ? "btn-disabled" : ""}`}
    >
      {text}
    </button>
  );
};

export default FormBtn;
