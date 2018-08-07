import React, { Component } from 'react';
import IdeaBox from './IdeaBox';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    title: '',
    body: '',
    }
  }

  submitIdea() {
    const { title, body } = this.state;

    const uniqueIdea = { id: Date.now(), quaility: 'swill', title, body }

    this.props.addIdea(uniqueIdea)
    this.setState({ title: '', body: ''})
  }

  submitIdeaOnEnter(event) {
    if (event.keycode === 13) {
      document.getElementById('title-field').focus()
      this.submitIdea()
    }
  }

  render() {
    const { title, body, ideas} = this.state;

    return ()
  }
}