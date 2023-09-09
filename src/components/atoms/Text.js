import React from 'react';
import PropTypes from 'prop-types';


const variants = {
    base: "text-base",
    colors: {
        white: "text-black",
        black: 'text-gray-50',
    }
}

const Text = ({ textAlign, size, fontStyle, color = "default", bg  , bold = false, classeName, ...props }) => {
    const classNames = [
        "text-base",
        variants.colors[color],
        classeName
    ];

    if (bold) classNames.push('font-bold')
    if (textAlign) classNames.push(`text-${textAlign}`)
    if (size) classNames.push(`text-${size}`)
    if (fontStyle) classNames.push(`font-${fontStyle}`)
    if (bg) classNames.push(`bg-${bg}`)
    

    return (
        <p {...props}  className={classNames.join(' ')}></p>
    );
}

Text.prototype = {
    bold: PropTypes.bool,
    textAlign: 'left' | 'center',
    size: "sm" | "md",
    color: "black" | "white" | "red" ,
    fontStyle: "light",
    bg: "neutral-900"
}

export default Text;
