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
  console.log(size, color, horizontal, vertical, rotate, spin);
  const childrenWithProps = React.Children.map(children, (child) => {
    const childElement = child as ReactElement<IconProps>;
    //console.log(childElement.props);
    return React.cloneElement(childElement, { inStack: true });
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
