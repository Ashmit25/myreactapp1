import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  render() {
    return (
      <div>
        <h1>Increment/Decrement app</h1>
        <br></br>
        <button onClick={this.IncrementItem} >
          +
        </button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
        <button onClick={this.DecreaseItem}>-</button>
      </div>
    );
  }
}
export default App;
//Made by Ashmit Kaushik 9B
