import React from "react";

import { PostComment, SubComments } from "components";

const Comments = ({ post }) => {
  if (post.comments.list.length !== 0) {
    return (
      <ul className="post-comments">
        {post.comments.list.map((commentator) => {
          return (
            <li key={commentator.id} className="post-comments-item">
              <PostComment className="main-comment" commentator={commentator} likes={post.comments.likes} />
              <SubComments replies={post.comments.replies} />
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default Comments;
