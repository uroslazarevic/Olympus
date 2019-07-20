import React from "react";

import { Post, PostComments } from "components";

const UserPosts = props => {
  return (
    <ul className="post-list">
      {props.posts.map(post => {
        return (
          <li key={post.id} className="post-list-item">
            <Post post={post} user={props.user} />
            <PostComments post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserPosts;
