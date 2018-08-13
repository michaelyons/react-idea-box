import React, { Component } from "react";

class IdeaForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    return (
      <form>
        <input value={this.state.value} />
        <input />
        <button>Submit</button>
      </form>
    );
  }
}
