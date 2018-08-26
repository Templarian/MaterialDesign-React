import { ReactElement } from "react";
import { IconProps } from "./IconProps";
export interface StackPropsBase {
    size?: number | string | null;
    color?: string | null;
    horizontal?: boolean | null;
    vertical?: boolean | null;
    rotate?: number | null;
    spin?: boolean | number | null;
}
export interface StackProps extends StackPropsBase {
    children: ReactElement<IconProps>[] | ReactElement<IconProps>;
}
