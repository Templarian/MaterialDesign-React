import * as React from "react";

interface IconProps {
  path: string,
  size?: number | string,
  horizontal?: boolean,
  vertical?: boolean,
  rotate?: number,
  color?: string,
  spin?: boolean | number
}
const Icon: React.SFC<IconProps> = ({ path, size, horizontal, vertical, rotate, color, spin }) => {
  const width = typeof(size) == 'string' ? size : `${size * 1.5}rem`;
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
  const spinSec = spin === true || typeof(spin) == 'string' ? 2 : spin;
  return (
    <svg viewBox="0 0 24 24"
      style={{
        width,
        transform: transform.join(" "),
        animation: spin && `spin linear ${spinSec}s infinite`,
        transformOrigin: spin && "center"
      }}>
      {spin && (
        <style>{"@keyframes spin { to { transform: rotate(360deg) } }"}</style>
      )}
      <path
        d={path}
        style={{
          fill: color
        }}/>
    </svg>
  );
}
Icon.defaultProps = {
  size: 1,
  horizontal: false,
  vertical: false,
  rotate: 0,
  color: null,
  spin: false
}
export default Icon;