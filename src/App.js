import React, { Component } from "react";
import Header from "./Header";
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
        <header>
          <h1>IdeaBox</h1>
          <Header ideas={ideas} />
        </header>
      </div>
    );
  }
}
