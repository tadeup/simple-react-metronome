import React, {Component} from 'react';

class PlayButton extends Component{

    render(){
        return(
            <button onClick={() => this.props.onClick()}>
                {this.props.isPlaying ? "Stop" : "Play"}
            </button>
        )
    }

}

export default PlayButton;