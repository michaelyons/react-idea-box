import React, { Component } from "react";

export default class IdeaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: props.IdeaCard.quality
    };
    this.qualities = ["swill", "neat", "genius"];
  }

  render() {}
}
