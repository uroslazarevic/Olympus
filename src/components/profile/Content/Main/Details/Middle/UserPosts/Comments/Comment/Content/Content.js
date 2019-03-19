import React from "react";

const Content = ({ commentator }) => {
  return <div className="comment-content">{commentator.comment}</div>;
};

export default Content;
