import React from "react";

import { PostComment as SubComment } from "components";

const SubComments = ({ commentator }) => {
  return (
    <ul className="sub-comments-list">
      {commentator.comments.count > 0 &&
        commentator.comments.list.map(item => {
          return (
            <li key={item.id} className="sub-comments-item">
              <SubComment className="sub-comment" commentator={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default SubComments;
