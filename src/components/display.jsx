import React from 'react';

import '../assets/css/display.css';

function Display(props) {
    return (
        <div className='display'>
            {props.bpm}
        </div>
    );
}

export default Display;