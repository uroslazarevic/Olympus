import React from "react";

const Item = ({ photo }) => {
  return (
    <li className="photo-item">
      <img src={photo.src} alt="photo-item-img" />
    </li>
  );
};

export default Item;
