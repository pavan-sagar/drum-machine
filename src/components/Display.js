import React, { Component } from "react";
import "../styles/Display.css";

export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power_slider: "on",
      displayValue: this.props.soundname,
    };

    this.togglePowerSlider = this.togglePowerSlider.bind(this);
    this.displayVolumeLevel = this.displayVolumeLevel.bind(this);
  }

  togglePowerSlider() {
    const setPower = () => {
      this.props.setpower(this.state.power_slider);
    };

    this.state.power_slider == "on"
      ? this.setState({ power_slider: "off" }, setPower)
      : this.setState({ power_slider: "on" }, setPower);
  }

  displayVolumeLevel(e) {
    this.setState({ displayValue: `Volume: ${e.target.value}` });

    this.props.setvolume(e.target.value);

    setTimeout(() => {
      this.setState({ displayValue: "" });
    }, 1500);
  }

  componentWillMount() {
    this.setState({ displayValue: this.props.soundname });
  }

  /* Our display panel should should show the volume level when its changed and then make the panel blank. Then again on pressing any sound button,
    it should show the sound name. To achieve this behaviour, we are checking  clickID from Display component and displaying sound name if a new button press event is triggered.*/
  componentDidUpdate(prevProp, prevState) {
    if (
      prevProp.soundname.clickID != this.props.soundname.clickID ||
      this.props.soundname.clickID == 0
    ) {
      this.setState({ displayValue: this.props.soundname.soundName });
    }
  }

  render() {
    return (
      <div className="Display">
        <div>
          <span className="power-label">Power</span>
          <div
            className="power_slider-background"
            onClick={this.togglePowerSlider}
          >
            <div className={`power_slider-${this.state.power_slider}`}></div>
          </div>

          {/* Display the sound name coming from Drumpad component via Parent Component */}
          <p className="chord-name">
            {this.state.power_slider == "on" ? this.state.displayValue : ""}
          </p>
          <input
            className="volume-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            onChange={this.displayVolumeLevel}
          disabled={this.state.power_slider == 'on' ? '' : 'disabled'}></input>
        </div>
      </div>
    );
  }
}

export default Display;
