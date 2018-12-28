import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Layout, Container, CardGrid, Button } from '../components';
import { Pagination, PaginationItem } from './blog-list-styled';

export default class BlogListTemplate extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { currentPage, pagesCount } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === pagesCount;
    const prevPage =
      currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
    const nextPage = `/blog/${currentPage + 1}`;

    const posts = data.allMdx.edges.map(({ node }) => ({
      name: node.frontmatter.title,
      description: node.frontmatter.tagline,
      url: `/blog${node.fields.slug}`,
      action: `Read article (~${node.timeToRead} min)`,
    }));

    return (
      <Layout
        title="Articles by Sunny Singh"
        description="Articles related to web development and business. Written by Sunny Singh."
      >
        <Container>
          <CardGrid items={posts} />
          <Pagination>
            {!isFirst && (
              <PaginationItem type="prev" isShowingOneItem={isFirst || isLast}>
                <Button as={Link} size="large" to={prevPage}>
                  <ArrowLeft size={18} /> Newer {isLast && ' articles'}
                </Button>
              </PaginationItem>
            )}
            {!isLast && (
              <PaginationItem type="next" isShowingOneItem={isFirst || isLast}>
                <Button as={Link} size="large" to={nextPage}>
                  Older {isFirst && ' articles'} <ArrowRight size={18} />
                </Button>
              </PaginationItem>
            )}
          </Pagination>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          code {
            scope
          }
          fields {
            slug
          }
          frontmatter {
            title
            tagline
          }
        }
      }
    }
  }
`;
