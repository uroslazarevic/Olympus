import React from "react";

const SocialBtn = ({ icon, className }) => {
  return <span className={`social-btn ${className}`}>{icon}</span>;
};

export default SocialBtn;
