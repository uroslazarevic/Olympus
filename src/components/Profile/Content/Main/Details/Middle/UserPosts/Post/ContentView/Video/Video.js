import React from "react";
import { YouTube } from "components/UI";

class Video extends React.Component {
  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const { post } = this.props;
    return (
      <div className="video-content">
        <div className="post-description">{post.description}</div>
        <div className="video-item">
          <div className="video-record">
            <YouTube videoId={post.videoLink.videoCode} className="post-youtube" onReady={this._onReady} />
          </div>
          <div className="video-details">
            <div className="video-title">NASLOV SNIMKA</div>
            <div className="video-description">OPIS SNIMKA</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
