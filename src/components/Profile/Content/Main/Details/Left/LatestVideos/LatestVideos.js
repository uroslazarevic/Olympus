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
        <InfoBlock name="Latest Videos">
          <ul className="latest-videos-list">
            {this.props.latestVideos.map((item, i) => {
              console.log("AASDA", item);
              return (
                <li key={item.id} className="video-record">
                  <YouTube
                    videoId={item.videoRecord.videoCode}
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
  }
}

export default LatestVideos;
