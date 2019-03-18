import React from "react";

import { Post } from "components";

const UserPosts = props => {
  return (
    <ul className="post-list">
      {props.posts.map(post => {
        return <Post key={post.id} post={post} user={props.user} />;
      })}
    </ul>
  );
};

export default UserPosts;
