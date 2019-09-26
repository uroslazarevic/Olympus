import React from "react";

// Context
import { UserContext } from "components/Contexts";

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
    const { user } = this.context;
    const { author, pseudonym, tags, created, text } = this.props.twit;
    return (
      <li className="twit-item">
        <InfoBlockItem
          imgShape="square"
          item={{
            src: this.props.src,
            title: pseudonym,
            description: `@${user.mainInfo.pseudonym}`,
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
TwitItem.contextType = UserContext;
export default TwitItem;
