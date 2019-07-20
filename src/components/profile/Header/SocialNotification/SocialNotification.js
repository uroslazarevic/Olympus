import React from "react";

const SocialNotification = ({ notification }) => {
  return (
    <div className="social-notification">
      <span className={`social-notification-icon ${notification.className}`}>{notification.icon}</span>
    </div>
  );
};

export default SocialNotification;
