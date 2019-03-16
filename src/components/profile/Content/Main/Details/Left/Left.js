import React from "react";
import { connect } from "react-redux";

import {
  ProfileContentMainDetailsLeftProfileIntro,
  ProfileContentMainDetailsLeftUserBadges
} from "components";

const Left = props => {
  const { details, badges } = props.details;
  return (
    <div className="left">
      <ProfileContentMainDetailsLeftProfileIntro details={details} />
      <ProfileContentMainDetailsLeftUserBadges
        badges={badges}
        username={props.username}
      />
    </div>
  );
};
function mapStateToProps({ user }) {
  return { details: user.mainInfo, username: user.basicInfo.name.first };
}
export default connect(
  mapStateToProps,
  null
)(Left);
