import React from "react";

import { ElipsisBtn as InfoBlockHeaderOptions } from "components/UI";

const Header = ({ name }) => {
  return (
    <div className="info-block-header">
      <div className="block-title">{name}</div>
      <InfoBlockHeaderOptions />
    </div>
  );
};

export default Header;
