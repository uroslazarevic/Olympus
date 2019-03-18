import React from "react";

import { PostHeader, PostFooter } from "components";

const Post = props => {
  // console.log("POST:", props);

  return (
    <li className="user-post">
      <PostHeader props={props} />
      <PostFooter post={props.post} />
    </li>
  );
};

export default Post;
