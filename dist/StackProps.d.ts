import { ReactElement, CSSProperties, RefObject } from "react";
import { IconProps, HTMLProps } from "./IconProps";
export interface StackPropsBase {
    ref?: RefObject<SVGSVGElement>;
    title?: string | null;
    description?: string | null;
    size?: number | string | null;
    color?: string | null;
    horizontal?: boolean | null;
    vertical?: boolean | null;
    rotate?: number | null;
    spin?: boolean | number | null;
    style?: CSSProperties;
}
export interface StackProps extends StackPropsBase, HTMLProps {
    children: ReactElement<IconProps>[] | ReactElement<IconProps>;
}
