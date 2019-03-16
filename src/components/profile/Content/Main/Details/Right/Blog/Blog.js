import React from "react";
import { InfoBlock } from "components/UI";
import { ProfileContentMainDetailsRightBlogPost } from "components";

const Blog = ({ blog }) => {
  return (
    <div className="profile-blog">
      <InfoBlock name="Blog Posts">
        <ul className="profile-blog-posts">
          {blog.map(post => {
            return (
              <ProfileContentMainDetailsRightBlogPost
                key={post.id}
                post={post}
              />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default Blog;
