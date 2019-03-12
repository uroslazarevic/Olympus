import React from "react";

import { Badge } from "components/UI";

const BadgedSocNotification = ({ badge, notification }) => {
  return (
    <div className="social-notification">
      <span className={`social-notification-icon ${notification.className}`}>
        {notification.icon}
      </span>
      <Badge status={badge.status} className={`badge ${badge.badgePosition}`} />
    </div>
  );
};

export default BadgedSocNotification;
