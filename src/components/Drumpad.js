import React, { Component } from "react";
import "../styles/Drumpad.css";

export class Drumpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundNames: {
        Q: "Heater 1",
        W: "Heater 2",
        E: "Heater 3",
        A: "Heater 4",
        S: "Clap",
        D: "Open HH",
        Z: `Kick n' Hat`,
        X: "Kick",
        C: "Closed HH",
      },
    };

    this.sendSoundName = this.sendSoundName.bind(this);
  }

  sendSoundName(e) {
    //We send the sound name tied to each button from this state to the Parent callback to update Parent state
    // and then from Parent, the same is passed as prop to Display component.
    this.props.setsoundname(this.state.soundNames[e.target.innerHTML]);
  }

  render() {
    return (
      <div className="Drumpad">
        <button
          className="d-btn"
          onClick={this.sendSoundName}
         
        >
          Q
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          W
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          E
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          A
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          S
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          D
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          Z
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          X
        </button>
        <button className="d-btn" onClick={this.sendSoundName}>
          C
        </button>
      </div>
    );
  }
}

export default Drumpad;
