import React from "react";
import { connect } from "react-redux";

import {
  ProfileContentMainDetailsLeftProfileIntro,
  ProfileContentMainDetailsLeftUserBadges,
  ProfileContentMainDetailsLeftSpotifyPlaylist,
  ProfileContentMainDetailsLeftTwitterFeed
} from "components";

const Left = props => {
  const { details, badges, spotifyList, twitterFeed } = props.details;
  return (
    <div className="left">
      <ProfileContentMainDetailsLeftProfileIntro details={details} />
      <ProfileContentMainDetailsLeftUserBadges
        badges={badges}
        username={props.basicInfo.name.first}
      />
      <ProfileContentMainDetailsLeftSpotifyPlaylist spotifyList={spotifyList} />
      <ProfileContentMainDetailsLeftTwitterFeed
        twitterFeed={twitterFeed}
        authorSrc={props.basicInfo.picture.thumbnail}
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
)(Left);
