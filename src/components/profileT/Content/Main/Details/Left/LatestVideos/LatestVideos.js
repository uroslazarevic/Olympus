import React from "react";
import { InfoBlock, YouTube } from "components/UI";

class LatestVideos extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    return (
      <div className="user-last-videos">
        <InfoBlock name="Last Videos">
          <ul className="latest-videos-list">
            {this.props.latestVideos.map(video => {
              console.log("video", video);
              return (
                <li key={video.id} className="video-record">
                  <YouTube videoId={video.yt_video_code} className="latest-video-youtube" onReady={this._onReady} />
                </li>
              );
            })}
          </ul>
        </InfoBlock>
      </div>
    );
  }
}

export default LatestVideos;
