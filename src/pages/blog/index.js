import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

export default class BlogPage extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location}>
        <Container>
          {posts.map(({ node }) => (
            <div key={node.fields.slug}>
              <h2>
                <Link to={`/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <small>{node.frontmatter.date}</small>
            </div>
          ))}
        </Container>
      </Layout>
    );
  }
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
