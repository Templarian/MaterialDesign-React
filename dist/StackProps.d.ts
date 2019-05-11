import { ReactElement, CSSProperties } from "react";
import { IconProps, HTMLProps } from "./IconProps";
export interface StackPropsBase {
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
