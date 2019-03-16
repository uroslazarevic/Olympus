import React, { Component } from "react";

import { InfoBlockHeader, InfoBlockContent } from "components/UI";

class InfoBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="info-block">
        <InfoBlockHeader name={this.props.name} />
        <InfoBlockContent>{this.props.children}</InfoBlockContent>
      </div>
    );
  }
}

export default InfoBlock;
