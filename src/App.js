import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Drumpad from "./components/Drumpad";
import Display from "./components/Display";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundName: "",
      volume: 50,
      power: "on",
    };

    this.setSoundName = this.setSoundName.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setPower = this.setPower.bind(this);
  }

  setSoundName(input) {
    this.setState({
      soundName: input,
    });
  }

  setVolume(input) {
    this.setState({
      volume: input,
    });
  }
  setPower(input) {
    this.setState({
      power: input,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Drumpad
            setsoundname={this.setSoundName}
            volume={this.state.volume}
            power={this.state.power}
          />
          <Display
            soundname={this.state.soundName}
            setvolume={this.setVolume}
            setpower={this.setPower}
          />
        </div>
      </div>
    );
  }
}

export default App;
