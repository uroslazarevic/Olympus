import React from "react";

import { ValidationFeedback } from "components";

const FormField = ({ input, label, meta, type }) => {
  const className = `field ${
    meta.touched ? (meta.error ? "is-error" : "is-success") : ""
  }`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} {...input} autoComplete="off" />
      <ValidationFeedback meta={meta} />
    </div>
  );
};

export default FormField;
