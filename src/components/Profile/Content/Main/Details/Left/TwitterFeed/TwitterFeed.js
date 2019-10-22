import React from "react";
import { InfoBlock } from "components/UI";
import { TwitterFeedTwitItem } from "components";

const TwitterFeed = ({ twitterFeed, user }) => {
  return (
    <div className="twitter-feed">
      <InfoBlock name="Twitter Feed">
        <ul className="twitter-feed-list">
          {twitterFeed.map((tweet) => {
            return <TwitterFeedTwitItem key={tweet.id} tweet={tweet} author={user} />;
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default TwitterFeed;
