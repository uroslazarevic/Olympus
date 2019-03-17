import React from "react";

import { InfoBlockItem, Tooltip } from "components/UI";

const Item = ({ page }) => {
  return (
    <li className="favourite-page-item">
      <InfoBlockItem item={page} imgShape="circle" />
      <Tooltip
        tagName="span"
        className="tooltip-target"
        content="ADD TO YOUR FAVS"
      >
        <span className="add-to-favorites">
          <i className="far fa-star" />
        </span>
      </Tooltip>
    </li>
  );
};

export default Item;
