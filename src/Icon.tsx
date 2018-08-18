import * as React from "react";
import { SFC, ValidationMap } from "react";
import * as PropTypes from "prop-types";

interface IconProps {
  path: string;
  size?: number | string;
  color?: string;
  horizontal?: boolean;
  vertical?: boolean;
  rotate?: number;
  spin?: boolean | number;
}

const Icon: SFC<IconProps> = ({
  path,
  size = 1,
  color = "",
  horizontal = false,
  vertical = false,
  rotate = 0,
  spin = false
}) => {
  const width = typeof size === "string" ? size : `${size * 1.5}rem`;

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

  const spinSec = spin === true || typeof spin !== "number" ? 2 : spin;

  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width,
        transform: transform.join(" "),
        animation: spin ? `spin linear ${spinSec}s infinite` : "",
        transformOrigin: spin ? "center" : ""
      }}>
      {spin && (
        <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      <path
        d={path}
        style={{
          fill: color
        }} />
    </svg>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  rotate: PropTypes.number,
  spin: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ])
} as ValidationMap<IconProps>

export default Icon;
