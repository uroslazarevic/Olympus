import React from "react";

const ValidationFeedback = ({ meta }) => {
  const { touched, error } = meta;

  if (touched && error) {
    return <div className="invalid-feedback">{error}</div>;
  } else if (touched) {
    return <div className="valid-feedback text-help">Looks good!</div>;
  } else {
    return null;
  }
};

export default ValidationFeedback;
