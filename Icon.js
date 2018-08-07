import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { mdiAccount } from "@mdi/js";

class Icon extends Component {
  render() {
    const {
      path, size, horizontal, vertical,
      rotate, color, spin
    } = this.props;
    return (
      <svg viewBox="0 0 24 24"
        style={{ width: "1.5rem" }}>
        <path d={path} />
      </svg>
    );
  }
}

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  rotate: PropTypes.number,
  color: PropTypes.string,
  spin: PropTypes.bool
};

Icon.defaultTypes = {
  size: 1,
  horizontal: false,
  vertical: false,
  rotate: 0,
  color: '#000',
  bool: false
};

export default Icon;