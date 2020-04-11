import React, { Component } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { withMDXScope } from 'gatsby-mdx/context';
import { Calendar, Clock } from 'react-feather';
import formatDate from 'date-fns/format';
import {
  Layout,
  Container,
  Alert,
  AlertLink,
  AccessibleText,
  AuthorBio,
  ShareButtons,
  YouTubeEmbed,
  CodePenEmbed,
  TweetEmbed,
} from '../components';
import {
  ArticleHeader,
  Title,
  Tagline,
  Author,
  Avatar,
  Metadata,
  MetadataItem,
  MetadataContent,
  ArticleContent,
  ArticleFooter,
} from './blog-post-styled';
import avatarBase64 from '../assets/avatar-base64';

const mdxComponents = {
  Alert,
  AlertLink,
  YouTubeEmbed,
  TweetEmbed,
  CodePenEmbed,
};

class BlogPostTemplate extends Component {
  render() {
    const { data, location, scope } = this.props;
    const {
      timeToRead,
      frontmatter,
      code: { body },
    } = data.mdx;

    return (
      <Layout
        location={location}
        title={frontmatter.title}
        description={frontmatter.tagline}
        image={
          frontmatter.metaImage &&
          frontmatter.metaImage.childImageSharp.fixed.src
        }
        imageWidth={
          frontmatter.metaImage &&
          frontmatter.metaImage.childImageSharp.fixed.width
        }
        imageHeight={
          frontmatter.metaImage &&
          frontmatter.metaImage.childImageSharp.fixed.height
        }
      >
        <ArticleHeader background={frontmatter.background}>
          <Title>{frontmatter.title}</Title>
          <Tagline>{frontmatter.tagline}</Tagline>
          <Metadata>
            <MetadataItem>
              <Author>
                <Avatar src={avatarBase64} alt="Written by: " />
                Sunny Singh
              </Author>
            </MetadataItem>
            <MetadataItem>
              <Calendar size={14} />
              <AccessibleText>Published on: </AccessibleText>
              <MetadataContent>
                {formatDate(new Date(frontmatter.date), 'LLL do, yyyy')}
              </MetadataContent>
            </MetadataItem>
            {timeToRead && (
              <MetadataItem>
                <Clock size={14} />
                <MetadataContent>{timeToRead} min read</MetadataContent>
              </MetadataItem>
            )}
          </Metadata>
        </ArticleHeader>
        <Container>
          <ArticleContent>
            <MDXRenderer scope={{ ...mdxComponents, ...scope }}>
              {body}
            </MDXRenderer>
          </ArticleContent>
          <ArticleFooter>
            <AuthorBio />
            <ShareButtons
              title={frontmatter.title}
              text={`${frontmatter.title} - ${frontmatter.tagline}`}
            />
          </ArticleFooter>
        </Container>
      </Layout>
    );
  }
}

export default withMDXScope(BlogPostTemplate);

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      code {
        scope
        body
      }
      frontmatter {
        title
        tagline
        date
        tags
        background
        metaImage {
          childImageSharp {
            fixed(width: 1024) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
