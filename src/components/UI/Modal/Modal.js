import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should ModalUpdate: " +  
      nextProps.show !== this.props.show ||
        nextProps.children !== this.props.children
    );
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
    //return true;
  }

  componentWillUpdate() {
    // console.log("[Modal] will update");
  }

  render() {
    console.log("Modal this.props.show: " + this.props.show)
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  modalClosed: PropTypes.func,
};

export default Modal;
