import React from "react";
import { Icons, IconNames } from "./Icons";

interface IconProperties {

    className?: string;
    
    viewBox?: string;

    title?: string;

    style?: any;

    role?: string;
    
    fill?: string;
    
    stroke?: string;

    strokeWidth?: string;

    strokeLinecap?: string;

    strokeLinejoin?: string;

    size?: '16' | '24' | '32' | '40';

    name: IconNames;
}

const Icon: React.FC<IconProperties> = ({ viewBox, title, size, name, stroke, strokeWidth, strokeLinecap, strokeLinejoin, ...props }) => (
    <svg width={size} height={size} viewBox={viewBox} {...props}>
        {title &&
            <title>{title}</title>
        }
        {Icons[name]()}
    </svg>
);

Icon.defaultProps = {
    viewBox: "0 0 16 16",
    size: "16",
    role: "img",
    fill: "none",
    strokeWidth: "2px",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

export default Icon;