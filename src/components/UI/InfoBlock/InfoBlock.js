import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// Components
import { InfoBlockHeader, InfoBlockContent, InfoBlockOptions } from "components/UI";
import { Modal } from "components";

class InfoBlock extends Component {
  constructor(props) {
    super(props);

    this.state = { showOptions: false, showModal: false, selectedOption: "" };
  }

  handleOptionsBtnClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  selectOption = (selectedOption) => {
    this.setState({ showModal: true, showOptions: false, selectedOption });
  };

  hideModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div className="info-block">
        <InfoBlockHeader
          handleOptionsBtnClick={this.handleOptionsBtnClick}
          optionsBtnActive={this.state.showOptions}
          name={this.props.name}
        />

        <InfoBlockContent>{this.props.children}</InfoBlockContent>
        {this.state.showOptions && <InfoBlockOptions selectOption={this.selectOption} />}
        <CSSTransition in={this.state.showModal} timeout={300} classNames="fade-edit" unmountOnExit>
          {() => (
            <Modal>
              {React.cloneElement(this.props.infoBlockModal, {
                hideModal: this.hideModal,
                defaultAction: this.state.selectedOption,
              })}
            </Modal>
          )}
        </CSSTransition>
      </div>
    );
  }
}

export default InfoBlock;
