import React from "react";
import { connect } from "react-redux";

import { Photos, Blog, Friends, FavouritePages, UserPool } from "components";

const Right = props => {
  const { photos, blog, friends, pool, favPages } = props.details;
  return (
    <div className="right">
      <Photos photos={photos} />
      <Blog blog={blog} />
      <Friends friends={friends} />
      <FavouritePages favPages={favPages} />
      <UserPool pool={pool} name={props.basicInfo.name.first} />
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
