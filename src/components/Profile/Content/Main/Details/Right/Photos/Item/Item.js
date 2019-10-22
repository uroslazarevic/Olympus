import React from "react";

const Item = ({ photo }) => {
  return (
    <li className="photo-item">
      <img src={`data:image/jpeg;base64,${photo.base64}`} alt="the-pho-item" />
    </li>
  );
};

export default Item;
