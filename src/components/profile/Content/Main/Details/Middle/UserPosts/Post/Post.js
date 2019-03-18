import React from "react";

import { PostHeader } from "components";

const Post = props => {
  // console.log("POST:", props);

  return (
    <li className="user-post">
      <PostHeader props={props} />
    </li>
  );
};

export default Post;
