import * as React from "react";
import { SFC, ValidationMap, ReactElement } from "react";
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
  children
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    const childElement = child as ReactElement<IconProps>;
    const props: Partial<IconProps> = {
      size: size === null ? childElement.props.size : size,
      color: color === null ? childElement.props.color : color,
      horizontal: horizontal === null ? childElement.props.horizontal : horizontal,
      vertical: vertical === null ? childElement.props.vertical : vertical,
      rotate: rotate === null ? childElement.props.rotate : rotate,
      spin: spin === null ? childElement.props.spin : spin,
      inStack: true
    };
    return React.cloneElement(childElement, props);
  });

  return (
    <svg
      viewBox="0 0 24 24">
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
  ]).isRequired
} as ValidationMap<StackProps>;

Stack.defaultProps = {
  size: null,
  color: null,
  horizontal: false,
  vertical: false,
  rotate: 0,
  spin: false
};

export default Stack;
