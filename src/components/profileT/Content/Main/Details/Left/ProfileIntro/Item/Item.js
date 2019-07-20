import React from "react";

const Item = ({ item }) => {
  return (
    <div className="profile-intro-item">
      <div className="profile-intro-item-title">{item.topic}</div>
      <div className="profile-intro-item-description">{item.content}</div>
    </div>
  );
};

export default Item;
