import React, {Component} from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  componentWillUpdate() {
    console.log('[Modal] will update')
  }

  render() {
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
    )
  }
  
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  modalClosed: PropTypes.func.isRequired
};

export default Modal;
