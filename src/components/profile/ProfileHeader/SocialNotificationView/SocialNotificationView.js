import React from "react";
import { SocialNotification, BadgedSocNotification } from "components";

const SocialNotificationView = ({ badge, ...notification }) => {
  if (badge) {
    return <BadgedSocNotification badge={badge} notification={notification} />;
  }
  return <SocialNotification notification={notification} />;
};

export default SocialNotificationView;
