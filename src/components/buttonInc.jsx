import React from 'react';

function BpmSidebar(props) {
    return (
        <button className='bpm-button' onClick={props.onClick}>
            <i className={"arrow up"}/>
        </button>
    );
}

export default BpmSidebar;