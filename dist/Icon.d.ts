import { SFC, ReactElement } from "react";
interface IconProps {
    path: string;
    size?: number | string;
    color?: string;
    horizontal?: boolean;
    vertical?: boolean;
    rotate?: number;
    spin?: boolean | number;
}
export declare const Icon: SFC<IconProps>;
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
export declare const Stack: SFC<StackProps>;
export default Icon;
