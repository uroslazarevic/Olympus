import React from "react";

const PoolProgressBar = props => {
  return (
    <div className="pool-progress">
      <div
        className="pool-progress-bar"
        role="progressbar"
        style={{
          width: `${props.votePercentage}%`
        }}
      >
        <span className="progress-bar-percentage">{props.votePercentage}%</span>
      </div>
    </div>
  );
};

export default PoolProgressBar;
