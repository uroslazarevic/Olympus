import React from "react";

import { TimelineHeadlineUser, TimelineHeadlineSocialBtns } from "components";
import { ElipsisBtn as TimelineHeadlinOptions } from "components/UI";

const TimelineHeadline = () => {
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
            <TimelineHeadlineUser />
          </a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">Photos</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">Videos</a>
        </li>
        <li className="item">
          <a href="javascript:void(0)">
            <TimelineHeadlinOptions />
          </a>
        </li>
      </ul>
      <TimelineHeadlineSocialBtns />
    </nav>
  );
};

export default TimelineHeadline;
