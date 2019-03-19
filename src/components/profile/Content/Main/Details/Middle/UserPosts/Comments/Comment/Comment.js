import React from "react";

import { CommentHeader, CommentFooter, CommentContent } from "components";

const Comment = ({ commentator, className }) => {
  return (
    <div className={`post-comment ${className}`}>
      <CommentHeader commentator={commentator} />
      <CommentContent commentator={commentator} />
      <CommentFooter commentator={commentator} />
    </div>
  );
};

export default Comment;
