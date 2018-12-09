import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function BlogPostTemplate({ data, location }) {
  const post = data.markdownRemark;
  const siteDescription = post.excerpt;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <Helmet>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
