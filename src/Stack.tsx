import * as React from "react";
import { SFC, ValidationMap, ReactElement, CSSProperties } from "react";
import * as PropTypes from "prop-types";
import { StackProps } from './StackProps';
import { IconProps } from './IconProps';

const Stack: SFC<StackProps> = ({
  size = null,
  color = null,
  horizontal = null,
  vertical = null,
  rotate = null,
  spin = null,
  style = {} as CSSProperties,
  children,
  ...rest
}) => {
  let anySpin = spin === null ? false : spin;
  const childrenWithProps = React.Children.map(children, (child) => {
    const childElement = child as ReactElement<IconProps>;
    if (anySpin !== true) {
      anySpin = (spin === null ? childElement.props.spin : spin) === true;
    }
    let scaledSize = childElement.props.size;
    if (typeof size === 'number' && typeof childElement.props.size === 'number') {
      scaledSize = childElement.props.size / size;
    }
    const props: Partial<IconProps> = {
      size: scaledSize,
      color: color === null ? childElement.props.color : color,
      horizontal: horizontal === null ? childElement.props.horizontal : horizontal,
      vertical: vertical === null ? childElement.props.vertical : vertical,
      rotate: rotate === null ? childElement.props.rotate : rotate,
      spin: spin === null ? childElement.props.spin : spin,
      inStack: true
    };
    return React.cloneElement(childElement, props);
  });
  if (size !== null) {
    style.width = typeof size === "string"
      ? size
      : `${size * 1.5}rem`;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      style={style}
      {...rest}>
      {anySpin && (
        <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      {childrenWithProps}
    </svg>
  );
};

Stack.displayName = 'Stack';

Stack.propTypes = {
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
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} as ValidationMap<StackProps>;

Stack.defaultProps = {
  size: null,
  color: null,
  horizontal: null,
  vertical: null,
  rotate: null,
  spin: null
};

export default Stack;
