import React from "react";

import { CommentHeader, CommentFooter, CommentContent, CommentOptions } from "components";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showOptions: false };
  }

  handleOptionsBtnClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    const { commentator, likes, className } = this.props;
    return (
      <div className={`post-comment ${className}`}>
        <CommentHeader
          handleOptionsBtnClick={this.handleOptionsBtnClick}
          optionsBtnActive={this.state.showOptions}
          commentator={commentator}
        />
        <CommentContent commentator={commentator} />
        <CommentFooter likes={likes} />
        {this.state.showOptions && <CommentOptions />}
      </div>
    );
  }
}

export default Comment;
