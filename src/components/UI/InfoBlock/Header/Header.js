import React from "react";

import { ElipsisBtn as HeaderOptions } from "components/UI";

const Header = ({ name, handleOptionsBtnClick, optionsBtnActive }) => {
  return (
    <div className="info-block-header">
      <div className="block-title">{name}</div>
      <HeaderOptions
        handleOptionsBtnClick={handleOptionsBtnClick}
        optionsBtnActive={optionsBtnActive}
      />
    </div>
  );
};

export default Header;
