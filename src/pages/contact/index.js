import React, { Component } from 'react';
import { Layout, Container } from '../../components';

export default class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Container>Contact page.</Container>
      </Layout>
    );
  }
}
