import React from "react";

// Context
import { UserContext } from "components/Contexts";

import { ProfileIntro, UserBadges, SpotifyPlaylist, TwitterFeed, LatestVideos } from "components";

const Left = ({ user }) => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        const {
          profileData: {
            profileIntro,
            // badges,
            // spotifyList,
            twitterFeed,
            latestVideos,
          },
          me,
        } = user;
        return (
          <div className="left">
            <ProfileIntro profileIntro={profileIntro} />
            {/* <UserBadges badges={badges} username={name} />
            <SpotifyPlaylist spotifyList={spotifyList} /> */}
            <TwitterFeed user={me} twitterFeed={twitterFeed} />
            <LatestVideos latestVideos={latestVideos} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Left;
