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
declare const Icon: SFC<IconProps>;
export default Icon;
