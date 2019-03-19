import React from "react";

import { PostHeader, PostFooter, PostContentView } from "components";

const Post = props => {
  return (
    <div className="user-post">
      <PostHeader props={props} />
      <PostContentView post={props.post} />
      <PostFooter post={props.post} />
    </div>
  );
};

export default Post;
