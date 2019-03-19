import React from "react";

const ElipsisBtn = ({ handleOptionsBtnClick, optionsBtnActive }) => {
  const activeBtn = optionsBtnActive ? "active-elipsis-btn" : "";

  return (
    <div
      onClick={handleOptionsBtnClick}
      className={`elipsis-btn show-options ${activeBtn}`}
    >
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};

export default ElipsisBtn;
