import React from "react";
import { InfoBlock } from "components/UI";
import { BlogPost } from "components";

const Blog = ({ blogPosts }) => {
  return (
    <div className="profile-blog">
      <InfoBlock name="Blog Posts">
        <ul className="profile-blog-posts">
          {blogPosts.map((blogPost) => {
            return <BlogPost key={blogPost.id} blogPost={blogPost} />;
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default Blog;
