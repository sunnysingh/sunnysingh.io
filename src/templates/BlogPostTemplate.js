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
  Comments,
  AccessibleText,
  AuthorBio,
  ShareButtons,
  CodeFund,
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
  CommentsContainer,
} from './blog-post-styled';
import avatar from '../assets/avatar.jpg';

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
                <Avatar
                  src="data:image/jpeg;base64,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"
                  alt="Written by: "
                />
                Sunny Singh
              </Author>
            </MetadataItem>
            <MetadataItem>
              <Calendar size={14} />
              <AccessibleText>Published on: </AccessibleText>
              <MetadataContent>
                {formatDate(new Date(frontmatter.date), 'MMM Do, YYYY')}
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
            <CodeFund />
            <AuthorBio />
            <ShareButtons
              title={frontmatter.title}
              text={`${frontmatter.title} - ${frontmatter.tagline}`}
            />
          </ArticleFooter>
          <CommentsContainer>
            <Comments />
          </CommentsContainer>
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
