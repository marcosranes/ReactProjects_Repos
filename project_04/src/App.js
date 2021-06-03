import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
/* import { useState } from "react"; */




export default class App extends Component {
    state = {
      contador: 0
    }
  
  adicionar = () => {
    const {contador} = this.state;
    this.setState({contador: contador + 1});
    
  }
  


  render() {
    const {contador} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code onClick={this.adicionar}>marcos{contador}</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
/* export class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
} */
