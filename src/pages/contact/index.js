import React, { Component } from 'react';
import { Layout, Container } from '../../components';

export default class ContactPage extends Component {
  render() {
    return (
      <Layout title="Contact" location={this.props.location}>
        <Container>Contact page.</Container>
      </Layout>
    );
  }
}
