import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Container, CardGrid } from '../../components';

export default function BlogPage({ data, location }) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    name: node.frontmatter.title,
    description: node.frontmatter.tagline,
    url: `${node.fields.slug}`,
    action: 'Read article',
  }));
  return (
    <Layout title="Articles" location={location}>
      <Container>
        <CardGrid items={posts} />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tagline
          }
        }
      }
    }
  }
`;
