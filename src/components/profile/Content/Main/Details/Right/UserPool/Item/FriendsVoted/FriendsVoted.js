import React from "react";

import { Avatar as VoterAvatar } from "components/UI";

const FriendsVoted = props => {
  return (
    <ul className="friends-voted">
      {props.voters.map(voter => {
        return (
          <li key={voter.id} className="choice-voter">
            <VoterAvatar imgSrc={voter.src} className="voter-avatar" />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsVoted;
