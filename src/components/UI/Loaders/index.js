import React from "react";

import pageLoader from "imgs/loaders/pageLoader.gif";

export function PageLoader() {
  return (
    <div className="page-loader-bg">
      <img className="page-loader" src={pageLoader} alt="" />
    </div>
  );
}
