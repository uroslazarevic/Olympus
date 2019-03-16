import React from "react";
import { connect } from "react-redux";

import {
  ProfileContentMainDetailsLeftProfileIntro,
  ProfileContentMainDetailsLeftUserBadges,
  ProfileContentMainDetailsLeftSpotifyPlaylist
} from "components";

const Left = props => {
  const { details, badges, spotifyList } = props.details;
  return (
    <div className="left">
      <ProfileContentMainDetailsLeftProfileIntro details={details} />
      <ProfileContentMainDetailsLeftUserBadges
        badges={badges}
        username={props.username}
      />
      <ProfileContentMainDetailsLeftSpotifyPlaylist spotifyList={spotifyList} />
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
