import React, { Component } from "react";
import "../styles/Drumpad.css";

export class Drumpad extends Component {
  constructor(props) {
    super(props);
    this.q_btn_ref = React.createRef();

    this.state = {
      soundInfo: {
        Q: {
          name: "Heater 1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        W: {
          name: "Heater 2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        E: {
          name: "Heater 3",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        A: {
          name: "Heater 4",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        S: {
          name: "Clap",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        D: {
          name: "Open HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        Z: {
          name: `Kick n' Hat`,
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        X: {
          name: "Kick",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        C: {
          name: "Closed HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
      },
      clickID: 0,
      buttonIsActive: false,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    /*1.We send the sound name tied to each button/key from this state to the Parent callback to update Parent state
         and then from Parent, the same is passed as prop to Display component.
         2. Our display panel should should show the volume level when its changed and then make the panel blank. Then again on pressing any sound button,
        it should show the sound name. To achieve this behaviour, we are sending incremented clickID to compare in Display component whether again any sound button is pressed or not.
        */

    //Don't playback when power if off
    if (this.props.power == "off") {
      return;
    }

    //Handle runtime error if user presses any other key
    if (
      typeof e.key !== "undefined" &&
      !["q", "w", "e", "a", "s", "d", "z", "x", "c"].includes(String(e.key))
    ) {
      return;
    }

    let soundKey =
      typeof e.key !== "undefined" ? e.key.toUpperCase() : e.target.innerHTML;

    const incrementedClickID = Number(this.state.clickID) + 1;

    this.setState({ clickID: incrementedClickID });

    this.props.setsoundname({
      soundName: this.state.soundInfo[soundKey].name,
      clickID: incrementedClickID,
    });

    let audio = new Audio(this.state.soundInfo[soundKey].url);
    audio.volume = this.props.volume / 100;
    audio.play();
  }

  render() {
    return (
      <div className="Drumpad" onKeyPress={this.handleKeyPress}>
        <button className="d-btn" onClick={this.handleKeyPress}>
          Q
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          W
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          E
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          A
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          S
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          D
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          Z
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          X
        </button>
        <button
          className="d-btn"
          onClick={this.handleKeyPress}
          onKeyPress={this.handleKeyPress}
        >
          C
        </button>
      </div>
    );
  }
}

export default Drumpad;
