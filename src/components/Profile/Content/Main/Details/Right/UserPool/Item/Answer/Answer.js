import React from "react";

const Answer = props => {
  return (
    <div className="answer">
      <label htmlFor="answer">
        <span
          id={props.radioBtnId}
          onClick={props.handlePoolVoting}
          className="radio-btn"
          value={props.answer}
        >
          {props.clickedRadioBtnId === props.radioBtnId && (
            <p className="radio-btn-target" />
          )}
        </span>
        {props.answer}
      </label>
      <span className="vote-percentage">{props.votePercentage}%</span>
    </div>
  );
};

export default Answer;
