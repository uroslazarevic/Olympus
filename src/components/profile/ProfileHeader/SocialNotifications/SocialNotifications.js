import React from "react";

import { SocialNotificationView } from "components";

const SocialNotifications = () => {
  return (
    <div className="social-notifications">
      <SocialNotificationView
        icon={<i className="fas fa-american-sign-language-interpreting" />}
        className="fr-requests"
      />
      <SocialNotificationView
        icon={<i className="fab fa-artstation" />}
        className="messages"
      />
      <SocialNotificationView
        badge={{ badgePosition: "top-right", status: "warning" }}
        icon={<i className="fas fa-exclamation-circle" />}
        className="notifications"
      />
    </div>
  );
};

export default SocialNotifications;
