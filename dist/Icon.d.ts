import { SFC } from "react";
interface IconProps {
    path: string;
    size?: number | string;
    color?: string;
    horizontal?: boolean;
    vertical?: boolean;
    rotate?: number;
    spin?: boolean | number;
}
declare const Icon: SFC<IconProps>;
export default Icon;
