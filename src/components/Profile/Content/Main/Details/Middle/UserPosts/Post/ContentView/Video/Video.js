import React from "react";
import { YouTube } from "components/UI";

const Video = ({ post }) => {
  return (
    <div className="video-content">
      <div className="post-description">{post.content}</div>
      <div className="video-item">
        <div className="video-record">
          <YouTube
            videoId={post.video.yt_video_code}
            className="post-youtube"
            onReady={this._onReady}
          />
        </div>
        <div className="video-details">
          <div className="video-title">{post.video.title}</div>
          <div className="video-description">{post.video.description}</div>
          <div className="video-origin">{post.video.origin}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
