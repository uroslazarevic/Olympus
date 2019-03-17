import React from "react";
import { connect } from "react-redux";

import {
  ProfileIntro,
  UserBadges,
  SpotifyPlaylist,
  TwitterFeed
} from "components";

const Left = props => {
  const { details, badges, spotifyList, twitterFeed } = props.details;
  return (
    <div className="left">
      <ProfileIntro details={details} />
      <UserBadges badges={badges} username={props.basicInfo.name.first} />
      <SpotifyPlaylist spotifyList={spotifyList} />
      <TwitterFeed
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
