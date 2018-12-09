import React, { Component } from 'react';
import { Layout, Container } from '../../components';

export default class ProjectsPage extends Component {
  render() {
    return (
      <Layout title="Projects" location={this.props.location}>
        <Container>Projects page.</Container>
      </Layout>
    );
  }
}
