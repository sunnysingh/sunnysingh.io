import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Layout, Container, Masthead } from '../components';
import {
  ArticleHeader,
  ArticleTitle,
  ArticleTagline,
} from './blog-post-styled';

export default function BlogPostTemplate({ data, location }) {
  const post = data.markdownRemark;
  const siteDescription = post.excerpt;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <Helmet>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <Masthead>
        <ArticleHeader>
          <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
          <ArticleTagline>{post.frontmatter.tagline}</ArticleTagline>
          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.5)' }}>
            <small>
              {post.frontmatter.date} | {post.fields.readingTime.text}
            </small>
          </p>
        </ArticleHeader>
      </Masthead>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        tagline
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;
