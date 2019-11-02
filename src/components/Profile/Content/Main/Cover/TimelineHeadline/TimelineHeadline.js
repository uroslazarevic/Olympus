import React from "react";

import { TimelineHeadlineUser, TimelineHeadlineSocialBtns } from "components";
import { ElipsisBtn as TimelineHeadlinOptions } from "components/UI";

const TimelineHeadline = () => {
  return (
    <nav className="timeline-headline">
      <ul className="list">
        <li className="item">
          <button className="active-profile-nav-item">Timeline</button>
        </li>
        <li className="item">
          <button>About</button>
        </li>
        <li className="item">
          <button>Friends</button>
        </li>
        <li className="item">
          <button>
            <TimelineHeadlineUser />
          </button>
        </li>
        <li className="item">
          <button>Photos</button>
        </li>
        <li className="item">
          <button>Videos</button>
        </li>
        <li className="item">
          <button>
            <TimelineHeadlinOptions />
          </button>
        </li>
      </ul>
      <TimelineHeadlineSocialBtns />
    </nav>
  );
};

export default TimelineHeadline;
