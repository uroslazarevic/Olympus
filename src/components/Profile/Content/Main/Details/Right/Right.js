import React from "react";

// Context
import { UserContext } from "components/Contexts";

import { Photos, BlogPosts, Friends, FavouritePages, UserPool } from "components";

const Right = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        const {
          profileData: {
            blogPosts,
            // badges,
            // spotifyList,
            friends,
            userPhotos,
          },
          me,
        } = user;
        return (
          <div className="right">
            <Photos photos={userPhotos} />
            <BlogPosts blogPosts={blogPosts} />
            <Friends friends={friends} />
            {/* <FavouritePages favPages={favPages} />
            <UserPool pool={pool} name={props.basicInfo.name.first} /> */}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Right;
