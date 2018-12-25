import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Container } from '../../components';

export default function BlogPage({ data, location }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout title="Articles" location={location}>
      <Container>
        {posts.map(({ node }) => (
          <div key={node.fields.slug}>
            <h2>
              <Link to={`/${node.fields.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <small>{node.frontmatter.date}</small>
          </div>
        ))}
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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
