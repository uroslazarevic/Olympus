import React from "react";

import { ElipsisBtn as HeaderOptions } from "components/UI";

const Header = ({ name }) => {
  return (
    <div className="info-block-header">
      <div className="block-title">{name}</div>
      <HeaderOptions />
    </div>
  );
};

export default Header;
