import React from "react";
import { connect } from "react-redux";

import {
  ProfileContentMainDetailsRightPhotos,
  ProfileContentMainDetailsRightBlog
} from "components";

const Left = props => {
  const { photos, blog, friends, pools, favPages } = props.details;
  return (
    <div className="right">
      <ProfileContentMainDetailsRightPhotos photos={photos} />
      <ProfileContentMainDetailsRightBlog blog={blog} />
    </div>
  );
};
function mapStateToProps({ user }) {
  return { details: user.mainInfo, basicInfo: user.basicInfo };
}
export default connect(
  mapStateToProps,
  null
)(Left);
