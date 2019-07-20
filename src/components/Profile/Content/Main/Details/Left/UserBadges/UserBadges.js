import React from "react";
import { InfoBlock, Avatar as BadgeAvatar } from "components/UI";

const UserBadges = ({ badges, username }) => {
  const name = `${username}'s Badges`;
  return (
    <div className="user-badges">
      <InfoBlock name={name}>
        {badges.map(badge => {
          const badgeData = badge.count
            ? {
                badgePosition: "normal-tr",
                status: badge.status,
                count: badge.count
              }
            : "";

          return (
            <BadgeAvatar
              key={badge.id}
              imgSrc={badge.src}
              badge={badgeData}
              className="badge-avatar avatar-medium"
            />
          );
        })}
      </InfoBlock>
    </div>
  );
};

export default UserBadges;
