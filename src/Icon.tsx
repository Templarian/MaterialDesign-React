import * as React from "react";
import { SFC, ValidationMap, CSSProperties } from "react";
import * as PropTypes from "prop-types";
import { IconProps } from './IconProps';

export { default as Stack } from './Stack';

let id = 0;

export const Icon: SFC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>(({
  path,
  title = null,
  description = null,
  size = null,
  color = null,
  horizontal = false,
  vertical = false,
  rotate = 0,
  spin = false,
  style = {} as CSSProperties,
  inStack = false,
  ...rest
}, ref) => {
  id++;
  const pathStyle: any = {};
  const transform = [];
  if (size !== null) {
    if (inStack) {
      transform.push(`scale(${size})`);
    } else {
      style.width = typeof size === "string"
        ? size
        : `${size * 1.5}rem`;
      style.height = style.width;
    }
  }
  if (horizontal) {
    transform.push("scaleX(-1)");
  }
  if (vertical) {
    transform.push("scaleY(-1)");
  }
  if (rotate !== 0) {
    transform.push(`rotate(${rotate}deg)`);
  }
  if (color !== null) {
    pathStyle.fill = color;
  }
  let pathElement = (
    <path
      d={path}
      style={pathStyle}
      {...(inStack ? rest : {}) as any} />
  );
  let transformElement = pathElement;
  if (transform.length > 0) {
    style.transform = transform.join(' ');
    style.transformOrigin = 'center';
    if (inStack) {
      transformElement = (
        <g style={style}>
          {pathElement}
          <rect width="24" height="24" fill="transparent" />
        </g>
      )
    }
  }
  let spinElement = transformElement;
  if (spin) {
    const spinSec = spin === true || typeof spin !== 'number' ? 2 : spin;
    let inverse = !inStack && (horizontal || vertical);
    if (spinSec < 0) { inverse = !inverse }
    spinElement = (
      <g style={{
          animation: `spin${inverse ? '-inverse' : ''} linear ${Math.abs(spinSec)}s infinite`,
          transformOrigin: 'center'
        }}>
        {transformElement}
        {!(horizontal || vertical || rotate !== 0) && (
          <rect width="24" height="24" fill="transparent" />
        )}
      </g>
    )
  }
  if (inStack) {
    return spinElement;
  }
  let ariaLabelledby;
  let labelledById = `icon_labelledby_${id}`;
  let describedById = ` icon_describedby_${id}`;
  let role;
  if (title) {
    ariaLabelledby = description
      ? labelledById
      : `${labelledById} ${describedById}`;
  } else {
    role = 'presentation';
    if (description) {
      throw new Error("title attribute required when description is set");
    }
  }
  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      style={style}
      role={role}
      aria-labelledby={ariaLabelledby}
      {...rest}>
      {title && <title id={labelledById}>{title}</title>}
      {description && <desc id={describedById}>{description}</desc>}
      {!inStack && spin && (
        horizontal || vertical
          ? <style>{"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"}</style>
          : <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      {spinElement}
    </svg>
  );
});

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
  style: PropTypes.object,
  inStack: PropTypes.bool,
  className: PropTypes.string
} as ValidationMap<IconProps>;
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28249

Icon.defaultProps = {
  size: null,
  color: null,
  horizontal: false,
  vertical: false,
  rotate: 0,
  spin: false
};

export default Icon;
