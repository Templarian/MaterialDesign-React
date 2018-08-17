import PropTypes from "prop-types";
import React from "react";

const Icon = ({ path, size, horizontal, vertical, rotate, color, spin }) => {
  const width = Number.isNaN(size) ? size : `${size * 1.5}rem`;
  const transform = [];
  if (horizontal) {
    transform.push("scaleX(-1)");
  }
  if (vertical) {
    transform.push("scaleY(-1)");
  }
  if (rotate !== 0) {
    transform.push(`rotate(${rotate}deg)`);
  }
  const spinSec = spin === true || Number.isNaN(spin) ? 2 : spin;
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width,
        transform: transform.join(" "),
        animation: spin && `spin linear ${spinSec}s infinite`,
        transformOrigin: spin && "center"
      }}
    >
      {spin && (
        <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      <path
        d={path}
        style={{
          fill: color
        }}
      />
    </svg>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  rotate: PropTypes.number,
  color: PropTypes.string,
  spin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

Icon.defaultProps = {
  size: 1,
  horizontal: false,
  vertical: false,
  rotate: 0,
  color: null,
  spin: false
};

export default Icon;
