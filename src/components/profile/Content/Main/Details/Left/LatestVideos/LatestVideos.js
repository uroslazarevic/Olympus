import React from "react";
import { InfoBlock, YouTube } from "components/UI";

const LatestVideos = ({ latestVideos }) => {
  return (
    <div className="user-last-videos">
      <InfoBlock name="Last Videos">
        <ul className="latest-videos-list">
          {latestVideos.map(video => {
            return (
              <li key={video.id} className="video-record">
                <YouTube
                  videoId={video.yt_video_code}
                  className="latest-video-youtube"
                  onReady={this._onReady}
                />
              </li>
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default LatestVideos;
