import React from "react";

import { TextContent, ImageContent, VideoContent } from "components";

class ContentView extends React.Component {
  renderContentView() {
    const { post } = this.props;

    if (post.type === "text") {
      return <TextContent post={post} />;
    }
    if (post.type === "image") {
      return <ImageContent post={post} />;
    }
    if (post.type === "video") {
      return <VideoContent post={post} />;
    }
  }

  render() {
    return <div className="post-content-view">{this.renderContentView()}</div>;
  }
}

export default ContentView;
