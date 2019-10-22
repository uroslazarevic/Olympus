import React from "react";

import { Avatar as VoterAvatar } from "components/UI";

const FriendsVoted = (props) => {
  return (
    <ul className="friends-voted">
      {props.voters.slice(0, 5).map((voter) => {
        if (voter.name === "You") {
          return null;
        }
        return (
          <li key={voter.id} className="voter">
            <VoterAvatar imgSrc={`data:image/jpeg;base64,${voter.avatar}`} className="voter-avatar" />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsVoted;
