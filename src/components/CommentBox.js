import React, { Component } from 'react';
import styled from 'styled-components';
import commentBox from 'commentbox.io';

const Container = styled.div`
  iframe {
    min-height: 500px; /* Fix content extending beyond iframe */
  }
`;

export default class CommentBox extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox(process.env.GATSBY_COMMENTBOX_ID, {
      textColor: '#d1d1e4',
    });
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return (
      <Container>
        <div className="commentbox" />
      </Container>
    );
  }
}
