import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ awesome, text}) => {
    return (
        <div className='flex flex-nowrap text-white gap-x-4 p-3 justify-around  items-center w-100'>
            <FontAwesomeIcon icon={awesome} className=''/>
            <Text className='flex-nowrap'>{text.charAt(0).toUpperCase() + text.slice(1)}</Text>
        </div>
    );
}


Icon.prototype = {
    awesome: PropTypes.object,
    text: PropTypes.string,
}

export default Icon;
