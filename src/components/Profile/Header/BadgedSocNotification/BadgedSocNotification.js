import React from "react";

import { Badge } from "components/UI";

const BadgedSocNotification = ({ badge, notification }) => {
  const hasStatus = badge.status ? "has-status" : "";
  return (
    <div className={`social-notification ${hasStatus}`}>
      <span className={`social-notification-icon ${notification.className}`}>
        {notification.icon}
      </span>
      <Badge badge={badge} />
    </div>
  );
};

export default BadgedSocNotification;
