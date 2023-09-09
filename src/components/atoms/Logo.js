import React from 'react';
import PropTypes from 'prop-types';
import logo_text_dark from '../../assets/images/logo/logo_text_dark.png';
import logo_text_light from '../../assets/images/logo/logo_text_light.png';
import logo_icon_1024 from '../../assets/images/logo/logo_icon_1024.png';
import logo_icon_128 from '../../assets/images/logo/logo_icon_128.png';
import logo_icon_64 from '../../assets/images/logo/logo_icon_64.png';


const variants = {
    colors: {
        black: logo_text_light,
        white: logo_text_dark,
    },
    size: {
        "64":logo_icon_64,
        "128":logo_icon_128,
        "1024":logo_icon_1024,
    }, 
}

const Logo = ({ text , asText, size, ...props  }) => {
    var src = null ;

    if(asText){
        src = variants.size[size];
    }else{
        src = variants.colors[text];   
    }
    
    return (
            <img
                src={src}
                alt="Logo"
                {...props}
            />
    );
}

Logo.prototype = {
    text: PropTypes.string,
    size: PropTypes.number,
    asText: PropTypes.bool
}

export default Logo;
