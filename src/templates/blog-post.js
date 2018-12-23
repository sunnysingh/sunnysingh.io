import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Calendar, Clock } from 'react-feather';
import { Layout, Container } from '../components';
import {
  ArticleHeader,
  Title,
  Tagline,
  Author,
  Avatar,
  Metadata,
  MetadataItem,
  MetadataContent,
} from './blog-post-styled';
import avatar from '../assets/avatar.jpg';

export default function BlogPostTemplate({ data, location }) {
  const post = data.markdownRemark;
  const siteDescription = post.excerpt;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <Helmet>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <ArticleHeader>
        <Title>{post.frontmatter.title}</Title>
        <Tagline>{post.frontmatter.tagline}</Tagline>
        <Metadata>
          <MetadataItem>
            <Author>
              <Avatar src={avatar} alt="Written by " />
              Sunny Singh
            </Author>
          </MetadataItem>
          <MetadataItem>
            <Calendar size={14} />
            <MetadataContent>{post.frontmatter.date}</MetadataContent>
          </MetadataItem>
          <MetadataItem>
            <Clock size={14} />
            <MetadataContent>{post.fields.readingTime.text}</MetadataContent>
          </MetadataItem>
        </Metadata>
      </ArticleHeader>
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
