import * as React from "react";
import { SFC } from "react";

interface IconProps {
  path: string;
  color?: string;
  horizontal?: boolean;
  rotate?: number;
  size?: number | string;
  spin?: boolean | number;
  vertical?: boolean;
}

const Icon: SFC<IconProps> = ({
  path,
  color = "",
  horizontal = false,
  rotate = 0,
  size = 1,
  spin = false,
  vertical = false
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

export default Icon;
