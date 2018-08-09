import React, { Component } from "react";
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const {
      path, size, horizontal, vertical,
      rotate, color, spin
    } = this.props;
    const width = isNaN(size)
      ? size
      : `${size * 1.5}rem`;
    const transform = [];
    if (horizontal) {
      transform.push('scaleX(-1)');
    }
    if (vertical) {
      transform.push('scaleY(-1)');
    }
    if (rotate !== 0) {
      transform.push(`rotate(${rotate})`);
    }
    if (spin) {
      throw 'Spin is not supported yet.';
    }
    return (
      <svg viewBox="0 0 24 24"
        style={{
          width,
          transform: transform.join(' '),
          animation: spin && 'spin linear 3s infinite',
          transformOrigin: 'center'
        }}>
        {spin && <style>{'@keyframes spin { to { transform: rotate(360deg) } }'}</style>}
        <path d={path}
          style={{
            fill: color
          }}/>
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

Icon.defaultProps = {
  size: 1,
  horizontal: false,
  vertical: false,
  rotate: 0,
  color: null,
  bool: false
};

export default Icon;