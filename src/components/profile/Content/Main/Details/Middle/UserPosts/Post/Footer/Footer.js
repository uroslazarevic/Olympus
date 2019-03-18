import React from "react";

import { PostBtn, EndorsedBy } from "components";
import { FriendsVoted } from "components/UI";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { personalEndorsment: false };
  }

  componentDidMount() {
    this.props.post.likes.list.forEach(endorser => {
      endorser.name === "You" && this.setState({ personalEndorsment: true });
    });
  }

  render() {
    const { post } = this.props;

    return (
      <div className="post-footer">
        <div className="post-footer-left">
          <PostBtn
            icon={<i className="far fa-heart" />}
            className={`like-btn ${
              this.state.personalEndorsment ? "my-endorse" : ""
            }`}
            count={post.likes.count}
          />
          <FriendsVoted voters={post.likes.list} />
          <EndorsedBy endorse={post.likes} />
        </div>
        <div className="post-footer-right">
          <PostBtn
            icon={<i className="far fa-comment" />}
            className="comment-btn"
            count={post.comments.count}
          />
          <PostBtn
            icon={<i className="fas fa-share" />}
            className="share-btn"
            count={post.shares.count}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
