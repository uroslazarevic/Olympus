import React from "react";
import { Badge } from "components/UI";

const Avatar = ({ badge, imgSrc, className }) => {
  return (
    <div className={`img-avatar ${className}`}>
      <img src={imgSrc} alt="avatar" />
      {badge && <Badge badge={badge} />}
    </div>
  );
};

export default Avatar;
