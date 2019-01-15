import React from 'react';

function ButtonDec(props) {
    return (
        <button className='bpm-button' onClick={props.onClick}>
            <i className={"arrow down"}/>
        </button>
    );
}

export default ButtonDec;