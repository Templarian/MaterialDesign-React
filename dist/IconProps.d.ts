import { AriaAttributes, CSSProperties, MouseEventHandler, RefObject } from 'react';
export interface HTMLProps extends AriaAttributes {
    className?: string;
    onClick?: MouseEventHandler;
}
export interface IconProps extends HTMLProps {
    path: string;
    ref?: RefObject<SVGSVGElement>;
    title?: string | null;
    description?: string | null;
    size?: number | string | null;
    color?: string | null;
    horizontal?: boolean;
    vertical?: boolean;
    rotate?: number;
    spin?: boolean | number;
    style?: CSSProperties;
    inStack?: boolean;
}
