import React from "react";

import { InfoBlockItem } from "components/UI";

class TwitItem extends React.Component {
  renderTags(tags) {
    return tags.map((tag, index) => {
      return (
        <span key={index} className="twit-tag">
          #{tag}
        </span>
      );
    });
  }

  render() {
    const { tweet, author } = this.props;
    return (
      <li className="twit-item">
        <InfoBlockItem
          imgShape="square"
          item={{
            src: `data:image/jpeg;base64,${author.profileSettings.avatar}`,
            title: author.profileSettings.name,
            description: `@${author.profileSettings.pseudonym}`,
          }}
        />
        <div className="twit-text">
          {tweet.text}
          {this.renderTags(tweet.tags)}
        </div>
        <div className="twit-created">{tweet.createdAt}</div>
      </li>
    );
  }
}

export default TwitItem;
