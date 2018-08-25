import * as React from "react";
import { SFC, ValidationMap, ReactElement } from "react";
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

export const Icon: SFC<IconProps> = ({
  path,
  size = null,
  color = '',
  horizontal = false,
  vertical = false,
  rotate = 0,
  spin = false
}) => {
  const width = size === null
    ? null
    : typeof size === "string"
      ? size
      : `${size * 1.5}rem`;

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
  ]),
  stack: PropTypes.object
} as ValidationMap<IconProps>;

Icon.defaultProps = {
  size: 1,
  color: '',
  horizontal: false,
  vertical: false,
  rotate: 0,
  spin: false
};

interface StackPropsBase {
  size?: number | string | null;
  color?: string | null;
  horizontal?: boolean | null;
  vertical?: boolean | null;
  rotate?: number | null;
  spin?: boolean | number | null;
}

interface StackProps extends StackPropsBase {
  children: ReactElement<IconProps>[] | ReactElement<IconProps>;
}

export const Stack: SFC<StackProps> = ({
  size = null,
  color = null,
  horizontal = null,
  vertical = null,
  rotate = null,
  spin = null,
  children
}) => {
  console.log(size, color, horizontal, vertical, rotate, spin);
  const childrenWithProps = React.Children.map(children, (child) => {
    const childElement = child as ReactElement<IconProps>;
    console.log(childElement.props);
    return React.cloneElement(childElement, { });
  });

  return (
    <svg>
      {childrenWithProps}
    </svg>
  );
};

export default Icon;
