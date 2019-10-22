import React from "react";

import { PostHeader, PostFooter, PostContentView, PostAsideBtns, PostOptions } from "components";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showOptions: false };
  }

  handleOptionsBtnClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    return (
      <div className="user-post">
        <PostHeader
          mainProps={this.props}
          handleOptionsBtnClick={this.handleOptionsBtnClick}
          optionsBtnActive={this.state.showOptions}
        />
        <PostContentView post={this.props.post} />
        <PostFooter post={this.props.post} />
        <PostAsideBtns post={this.props.post} />
        {this.state.showOptions && <PostOptions />}
      </div>
    );
  }
}

export default Post;
