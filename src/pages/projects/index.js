import React, { Component } from 'react';
import { Layout, Container } from '../../components';

export default class ProjectsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Container>Projects page.</Container>
      </Layout>
    );
  }
}
