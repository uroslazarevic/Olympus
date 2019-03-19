import React from "react";
import { InfoBlock } from "components/UI";
import { TwitterFeedTwitItem } from "components";

const TwitterFeed = ({ twitterFeed, authorSrc }) => {
  return (
    <div className="twitter-feed">
      <InfoBlock name="Twitter Feed">
        <ul className="twitter-feed-list">
          {twitterFeed.map(twit => {
            return (
              <TwitterFeedTwitItem key={twit.id} twit={twit} src={authorSrc} />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default TwitterFeed;
