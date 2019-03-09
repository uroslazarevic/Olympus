import React from "react";

import { ValidationFeedback } from "components";

const FormField = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <ValidationFeedback meta={meta} />
    </div>
  );
};

export default FormField;
