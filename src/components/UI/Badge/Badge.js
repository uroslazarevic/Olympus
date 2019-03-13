import React from "react";

const Badge = ({ badge }) => {
  return (
    <div className={`badge-item ${badge.status} ${badge.badgePosition}`}>
      {badge.count && <div className="content">{badge.count}</div>}
    </div>
  );
};

export default Badge;
