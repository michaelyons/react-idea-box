import React, { Component } from "react";
import Header from "./Header";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { ideas: [] };
  }

  render() {
    const { ideas } = this.state;

    return (
      <div>
        <Header ideas={ideas} />
      </div>
    );
  }
}
