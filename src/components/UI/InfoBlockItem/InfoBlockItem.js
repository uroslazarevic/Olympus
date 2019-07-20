import React from "react";

const InfoBlockItem = ({ item, imgShape }) => {
  return (
    <div className="info-block-item">
      <img
        className={`item-img ${imgShape}`}
        src={item.src}
        alt="info-block-item-img"
      />
      <div className="item-info">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
    </div>
  );
};

export default InfoBlockItem;
