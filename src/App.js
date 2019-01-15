import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/display.jsx';
import BpmSidebar from './components/bpmSidebar';
import PlayButton from './components/play';
import './App.css';

import click1 from "./assets/sounds/click1.wav";
import click2 from "./assets/sounds/click2.wav";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            currentBpm: 100
        };
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    changePlay(){
        console.log(this.state.isPlaying);
        this.setState((state, props) => {
            return {isPlaying: !state.isPlaying};
        }, () => {
            if (this.state.isPlaying) {
                this.interval = setInterval(() => {
                    console.log("a");
                    this.click1.play();
                }, 60000/this.state.currentBpm)
            } else {
                clearInterval(this.interval);
            }
        });
    }

    changeBpm(butt){
        this.setState((state, props) => {
            if (butt === "up" && state.currentBpm < 200) {
                return {currentBpm: state.currentBpm + 1}
            } else if (butt === "down" && state.currentBpm > 0) {
                return {currentBpm: state.currentBpm - 1}
            } else {
                return;
            }
        });
    }

    componentDidUpdate() {
        console.log("updating Component...");
    }

    componentDidMount() {
        console.log("Mounting Component...");
    }

    componentWillUnmount() {
        console.log("Unmounting Component...");
    }

    render() {
        return (
            <div className="App">
                <div className={"container"}>
                    <div className={"row"}>
                        <div className='col-3'/>
                        <div className="col-6 text-center">
                            <div className={"row"}>
                                <div className="col-2">
                                    <BpmSidebar onClick={(x) => {this.changeBpm(x)}} />
                                </div>
                                <div className="col-8 my-auto">
                                    <Display bpm={this.state.currentBpm}/>
                                </div>
                                <div className="col-2"/>
                            </div>
                        </div>
                        <div className='col-3'/>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12 text-center"}>
                            <PlayButton isPlaying={this.state.isPlaying} onClick={() => this.changePlay()}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-12 text-center">
                            <a href="#">Github</a>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default App;
