import React from "react";

import { PostComment, SubComments } from "components";

const Comments = ({ post }) => {
  if (post.comments.count != 0) {
    return (
      <ul className="post-comments">
        {post.comments.list.map(commentator => {
          return (
            <li key={commentator.id} className="post-comments-item">
              <PostComment className="main-comment" commentator={commentator} />
              <SubComments commentator={commentator} />
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default Comments;
