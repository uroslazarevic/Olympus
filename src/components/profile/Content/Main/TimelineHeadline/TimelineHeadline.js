import React from "react";

import {
  ProfileContentMainTimelineHeadlineUser,
  ProfileContentMainTimelineHeadlineSocialBtns
} from "components";

const TimelineHeadline = ({ user }) => {
  return (
    <nav className="timeline-headline">
      <ul className="list">
        <li className="item">
          <a href="javascript:void(0)" className="active-profile-nav-item">
            Timeline
          </a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">About</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">Friends</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">
            <ProfileContentMainTimelineHeadlineUser user={user} />
          </a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">Photos</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">Videos</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">...</a>
        </li>
      </ul>
      <ProfileContentMainTimelineHeadlineSocialBtns />
    </nav>
  );
};

export default TimelineHeadline;
