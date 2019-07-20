import React from "react";
import { InfoBlock, Avatar as FriendAvatar } from "components/UI";

const Friends = ({ friends }) => {
  return (
    <div className="profile-friends">
      <InfoBlock name={`Friends (${friends.count})`}>
        <ul className="profile-friends-list">
          {friends.list.map(friend => {
            return (
              <FriendAvatar
                imgSrc={friend.src}
                className="friend-avatar avatar-medium"
                key={friend.id}
              />
            );
          })}
          <li className="show-more-friends avatar-medium">
            <span className="friends-remaining">
              +{friends.count - friends.list.length}
            </span>
          </li>
        </ul>
      </InfoBlock>
    </div>
  );
};

export default Friends;
