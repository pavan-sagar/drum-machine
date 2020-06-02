import React, { Component } from "react";
import "../styles/Display.css";

export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: "on",
    };

    this.toggleSlider = this.toggleSlider.bind(this);
  }

  toggleSlider() {
    this.state.slider == "on"
      ? this.setState({ slider: "off" })
      : this.setState({ slider: "on" });
  }
  render() {
    return (
      <div className="Display">
        <div>
          <span className="power-label">Power</span>
          <div className="slider-background" onClick={this.toggleSlider}>
            <div className={`slider-${this.state.slider}`}></div>
          </div>
          
        {/* Display the sound name coming from Drumpad component via Parent Component */}
          <p className="chord-name">{this.props.soundname}</p>
          <input
            className="volume-slider"
            type="range"
            min="0"
            max="100"
          ></input>
        </div>
      </div>
    );
  }
}

export default Display;
