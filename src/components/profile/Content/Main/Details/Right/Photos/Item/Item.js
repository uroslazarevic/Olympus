import React from "react";

const Item = ({ photo }) => {
  return (
    <li className="photo-item">
      <img src={photo.src} alt="the-pho-item" />
    </li>
  );
};

export default Item;
