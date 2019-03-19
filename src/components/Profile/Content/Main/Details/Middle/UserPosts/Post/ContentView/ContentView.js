import React from "react";

import { TextContent, ImageContent, VideoContent } from "components";

class ContentView extends React.Component {
  renderContentView() {
    const { post } = this.props;

    if (post.shareType === "text") {
      return <TextContent post={post} />;
    }
    if (post.shareType === "image") {
      return <ImageContent post={post} />;
    }
    if (post.shareType === "video") {
      return <VideoContent post={post} />;
    }
  }

  render() {
    return <div className="post-content-view">{this.renderContentView()}</div>;
  }
}

export default ContentView;
