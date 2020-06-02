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
    };

    this.setSoundName = this.setSoundName.bind(this);
  }

  setSoundName(input) {
    this.setState({
      soundName: input,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Drumpad setsoundname={this.setSoundName} />
          <Display soundname={this.state.soundName} />
        </div>
      </div>
    );
  }
}

export default App;
