import * as React from "react";
import { SFC, ValidationMap } from "react";
import * as PropTypes from "prop-types";
import { IconProps } from './IconProps';

export { default as Stack } from './Stack';

export const Icon: SFC<IconProps> = ({
  path,
  size = null,
  color = null,
  horizontal = false,
  vertical = false,
  rotate = 0,
  spin = false,
  inStack = false
}) => {
  const style: any = {};
  const pathStyle: any = {};
  if (size !== null) {
    style.width = typeof size === "string"
      ? size
      : `${size * 1.5}rem`;
  }

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
  if (transform.length > 0) {
    style.transform = transform.join(' ');
  }
  const spinSec = spin === true || typeof spin !== 'number' ? 2 : spin;
  if (!inStack && spin) {
    style.animation = `spin linear ${spinSec}s infinite`;
    style.transformOrigin = 'center';
  }
  if (color !== null) {
    pathStyle.fill = color;
  }

  return inStack
  ? spin 
    ? (
      <g
        style={{
          animation: `spin linear ${spinSec}s infinite`,
          transformOrigin: 'center'
        }}>
        <path
          d={path}
          style={pathStyle} />
        <rect width="24" height="24" fill="transparent" />
      </g>
    )
    : (
      <path
        d={path}
        style={pathStyle} />
    )
  : (
    <svg
      viewBox="0 0 24 24"
      style={style}>
      {spin && (
        <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      <path
        d={path}
        style={pathStyle} />
    </svg>
  );
};

Icon.displayName = 'Icon';

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
  ]),
  inStack: PropTypes.bool
} as ValidationMap<IconProps>;

Icon.defaultProps = {
  size: null,
  color: null,
  horizontal: false,
  vertical: false,
  rotate: 0,
  spin: false
};

export default Icon;
