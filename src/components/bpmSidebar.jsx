import React from 'react';
import ButtonInc from './buttonInc.jsx';
import ButtonDec from './buttonDec.jsx';

import '../assets/css/bpmSidebar.css';

function BpmSidebar(props) {
    return (
        <div className='side-button'>
            <ButtonInc onClick={() => {props.onClick("up")}}/>
            <ButtonDec onClick={() => {props.onClick("down")}}/>
        </div>
    );
}

export default BpmSidebar;