import React from "react";

import { PostBtn } from "components/UI";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { personalEndorsment: false };
  }

  componentDidMount() {
    this.props.commentator.likes.list.forEach(endorser => {
      endorser.name === "You" && this.setState({ personalEndorsment: true });
    });
  }

  render() {
    return (
      <div className="comment-footer">
        <PostBtn
          icon={<i className="far fa-heart" />}
          className={`like-btn ${
            this.state.personalEndorsment ? "my-endorse" : ""
          }`}
          count={this.props.commentator.likes.count}
        />
        <div className="comment-reply">Reply</div>
      </div>
    );
  }
}

export default Footer;
