import React from "react";
import { connect } from "react-redux";

import {
  ProfileContentMainDetailsRightPhotos,
  ProfileContentMainDetailsRightBlog,
  ProfileContentMainDetailsRightFriends,
  ProfileContentMainDetailsRightFavouritePages,
  ProfileContentMainDetailsRightUserPool
} from "components";

const Right = props => {
  const { photos, blog, friends, pool, favPages } = props.details;
  return (
    <div className="right">
      <ProfileContentMainDetailsRightPhotos photos={photos} />
      <ProfileContentMainDetailsRightBlog blog={blog} />
      <ProfileContentMainDetailsRightFriends friends={friends} />
      <ProfileContentMainDetailsRightFavouritePages favPages={favPages} />
      <ProfileContentMainDetailsRightUserPool
        pool={pool}
        name={props.basicInfo.name.first}
      />
    </div>
  );
};
function mapStateToProps({ user }) {
  return { details: user.mainInfo, basicInfo: user.basicInfo };
}
export default connect(
  mapStateToProps,
  null
)(Right);
