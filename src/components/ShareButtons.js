import React, { Component } from 'react';
import styled from 'styled-components';
import socialshares from 'socialshares/dist/socialshares.noicons';
import twitter from 'socialshares/dist/icons/twitter';
import facebook from 'socialshares/dist/icons/facebook';
import linkedin from 'socialshares/dist/icons/linkedin';

const TWITTER_USERNAME = 'sunnysinghio';

const Container = styled.div`
  & .socialshares-btn {
    border-radius: 4px;
  }
`;

export default class ShareButtons extends Component {
  componentDidMount() {
    socialshares.configure({ icons: { twitter, facebook, linkedin } });
    socialshares.mount();
  }

  componentWillUnmount() {
    socialshares.unmount();
  }

  render() {
    return (
      <Container>
        <div
          className="socialshares"
          data-title={this.props.title}
          data-text={this.props.text}
          data-theme="brand"
          data-size="large"
        >
          <div className="socialshares-twitter" data-via={TWITTER_USERNAME} />
          <div className="socialshares-facebook" />
          <div className="socialshares-linkedin" />
        </div>
      </Container>
    );
  }
}
