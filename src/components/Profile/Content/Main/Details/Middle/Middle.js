import React from "react";
import { connect } from "react-redux";

import { UserPosts } from "components";

const Middle = props => {
  const { posts, user } = props;

  return (
    <div className="middle">
      <UserPosts posts={posts} user={user} />
    </div>
  );
};

function mapStateToProps({ user }) {
  return { posts: user.mainInfo.posts, user: user.basicInfo };
}
export default connect(
  mapStateToProps,
  null
)(Middle);
