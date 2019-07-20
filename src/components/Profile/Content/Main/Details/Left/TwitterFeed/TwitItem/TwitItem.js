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
    const { author, pseudonym, tags, created, text } = this.props.twit;
    return (
      <li className="twit-item">
        <InfoBlockItem
          imgShape="square"
          item={{
            src: this.props.src,
            title: pseudonym,
            description: `@${author}`
          }}
        />
        <div className="twit-text">
          {text}
          {this.renderTags(tags)}
        </div>
        <div className="twit-created">{created}</div>
      </li>
    );
  }
}

export default TwitItem;
