import React from "react";

const FormBtn = ({ text, icon, btnClass, name }) => {
  if (icon) {
    return (
      <button name={name} className={`ui-btn ${btnClass}`}>
        <span>{icon}</span>
        {text}
      </button>
    );
  }
  return (
    <button name={name} className={`ui-btn ${btnClass}`}>
      {text}
    </button>
  );
};

export default FormBtn;
