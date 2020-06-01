import React, { Component } from "react";
import "../styles/Drumpad.css";

export class Drumpad extends Component {
  render() {
    return (
      <div className="Drumpad">
        <button className="d-btn">Q</button>
        <button className="d-btn">W</button>
        <button className="d-btn">E</button>
        <button className="d-btn">A</button>
        <button className="d-btn">S</button>
        <button className="d-btn">D</button>
        <button className="d-btn">Z</button>
        <button className="d-btn">X</button>
        <button className="d-btn">C</button>
      </div>
    );
  }
}

export default Drumpad;
