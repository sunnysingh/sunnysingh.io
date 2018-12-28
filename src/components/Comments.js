import React, { Component } from 'react';
import { Button, CommentBox } from '../components';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsVisible: false,
    };
  }

  render() {
    return this.state.isCommentsVisible ? (
      <CommentBox />
    ) : (
      <Button
        size="large"
        onClick={() => this.setState({ isCommentsVisible: true })}
      >
        Show comments
      </Button>
    );
  }
}
