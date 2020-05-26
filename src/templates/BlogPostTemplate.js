import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
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

const shortcodes = {
  Alert,
  AlertLink,
  YouTubeEmbed,
  TweetEmbed,
  CodePenEmbed,
  pre: (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={nightOwl}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, index) => (
              <div {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

export default class BlogPostTemplate extends Component {
  render() {
    const { data, location } = this.props;
    const { timeToRead, frontmatter, body } = data.mdx;

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
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
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

export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      body
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
