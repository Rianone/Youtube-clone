import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    small: "h-8 w-8",
    big: {
        value: "w-32 h-32",
        svg: "w-36 h-36",
    },
}

const Avatar = ({ src = null, size = "small", ...props }) => {
    const variantSize = variants[size];
    return (
        <>
            {
                src ?
                    <img className={`${variantSize.value}  rounded-full`} src={src} alt="Rounded avatar" {...props}></img>
                    :
                    size === "big" ?
                        <div class="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" {...props}>
                            <svg class="absolute w-36 h-36 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                        </div> :
                        <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" {...props}>
                            <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
            }
        </>
    );
}

Avatar.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.string,
}

export default Avatar;
