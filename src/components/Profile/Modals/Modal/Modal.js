import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.body = document.querySelector("body");
    this.childModal = document.createElement("div");
    this.el.classList.add("parent-modal");
    this.childModal.classList.add("child-modal");
    this.el.appendChild(this.childModal);
  }

  componentDidMount() {
    this.body.style.overflow = "hidden";
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    this.body.style.overflow = "initial";
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.childModal);
  }
}
