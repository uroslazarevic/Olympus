import React from "react";

import { PostComment as SubComment } from "components";

const SubComments = ({ replies }) => {
  return (
    <ul className="sub-comments-list">
      {replies.list.length > 0 &&
        replies.list.map((commentator) => {
          return (
            <li key={commentator.id} className="sub-comments-item">
              <SubComment className="sub-comment" commentator={commentator} likes={replies.likes} />
            </li>
          );
        })}
    </ul>
  );
};

export default SubComments;
