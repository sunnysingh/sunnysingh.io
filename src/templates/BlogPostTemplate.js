import React, { Component } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { Calendar, Clock } from 'react-feather';
import formatDate from 'date-fns/format';
import {
  Layout,
  Container,
  AccessibleText,
  Button,
  AuthorBio,
  ShareButtons,
  CommentBox,
  CodeFund,
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
  Comments,
} from './blog-post-styled';
import avatar from '../assets/avatar.jpg';

export default class BlogPostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsVisible: false,
    };
  }

  render() {
    const { data, location } = this.props;
    const {
      timeToRead,
      frontmatter,
      code: { body },
    } = data.mdx;
    const { isCommentsVisible } = this.state;

    return (
      <Layout
        location={location}
        title={frontmatter.title}
        description={frontmatter.tagline}
        image={frontmatter.metaImage && frontmatter.metaImage.publicURL}
      >
        <ArticleHeader background={frontmatter.background}>
          <Title>{frontmatter.title}</Title>
          <Tagline>{frontmatter.tagline}</Tagline>
          <Metadata>
            <MetadataItem>
              <Author>
                <Avatar src={avatar} alt="Written by: " />
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
            <MDXRenderer>{body}</MDXRenderer>
          </ArticleContent>
          <ArticleFooter>
            <CodeFund />
            <AuthorBio />
            <ShareButtons
              title={frontmatter.title}
              text={`${frontmatter.title} - ${frontmatter.tagline}`}
            />
          </ArticleFooter>
          <Comments>
            {isCommentsVisible ? (
              <CommentBox />
            ) : (
              <Button
                size="large"
                onClick={() => this.setState({ isCommentsVisible: true })}
              >
                Show comments
              </Button>
            )}
          </Comments>
        </Container>
      </Layout>
    );
  }
}

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
          publicURL
        }
      }
    }
  }
`;
