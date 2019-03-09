import React from "react";

const ValidationFeedback = ({ error, touched }) => {
  if (touched && error) {
    return <div className="invalid-feedback">{error}</div>;
  } else if (touched) {
    <div className="valid-feedback">Looks good!</div>;
  } else {
    return null;
  }
};

export default ValidationFeedback;
