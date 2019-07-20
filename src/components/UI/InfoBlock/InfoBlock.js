import React, { Component } from "react";

import { InfoBlockHeader, InfoBlockContent, InfoBlockOptions } from "components/UI";

class InfoBlock extends Component {
  constructor(props) {
    super(props);

    this.state = { showOptions: false };
  }

  handleOptionsBtnClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    return (
      <div className="info-block">
        <InfoBlockHeader
          handleOptionsBtnClick={this.handleOptionsBtnClick}
          optionsBtnActive={this.state.showOptions}
          name={this.props.name}
        />
        <InfoBlockContent>{this.props.children}</InfoBlockContent>
        {this.state.showOptions && <InfoBlockOptions />}
      </div>
    );
  }
}

export default InfoBlock;
