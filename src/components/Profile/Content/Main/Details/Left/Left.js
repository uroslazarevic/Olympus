import React from "react";

// Context
import { UserContext } from "components/Contexts";

import { ProfileIntro, UserBadges, SpotifyPlaylist, TwitterFeed, LatestVideos } from "components";

const Left = ({ user }) => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        const { details, badges, spotifyList, twitterFeed, latestVideos, name, avatar } = user.mainInfo;
        return (
          <div className="left">
            <ProfileIntro details={details} />
            <UserBadges badges={badges} username={name} />
            <SpotifyPlaylist spotifyList={spotifyList} />
            <TwitterFeed twitterFeed={twitterFeed} authorSrc={`data:image/jpeg;base64,${avatar}`} />
            <LatestVideos latestVideos={latestVideos} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Left;
