import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Calendar, Clock } from 'react-feather';
import readingTime from 'reading-time';
import formatDate from 'date-fns/format';
import {
  Layout,
  Container,
  AccessibleText,
  AuthorBio,
  ShareButtons,
  CommentBox,
} from '../components';
import { parseChildrenStrings } from '../utils/component';
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
  ShowCommentsButton,
} from './blog-post-styled';
import avatar from '../assets/avatar.jpg';

export default class BlogPostTemplate extends Component {
  state = {
    isCommentsVisible: false,
  };

  render() {
    const { pageContext, location, children } = this.props;
    const post = pageContext.frontmatter;
    const approximateReadTime = readingTime(parseChildrenStrings(children))
      .text;
    const { isCommentsVisible } = this.state;

    return (
      <Layout location={location} title={post.title}>
        <Helmet>
          <meta name="description" content={post.tagline} />
        </Helmet>
        <ArticleHeader>
          <Title>{post.title}</Title>
          <Tagline>{post.tagline}</Tagline>
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
                {formatDate(new Date(post.date), 'MMM Do, YYYY')}
              </MetadataContent>
            </MetadataItem>
            <MetadataItem>
              <Clock size={14} />
              <MetadataContent>{approximateReadTime}</MetadataContent>
            </MetadataItem>
          </Metadata>
        </ArticleHeader>
        <Container>
          <ArticleContent>{children}</ArticleContent>
          <ArticleFooter>
            <AuthorBio />
            <ShareButtons
              title={post.title}
              text={`${post.title} - ${post.tagline}`}
            />
          </ArticleFooter>
          <Comments>
            {isCommentsVisible ? (
              <CommentBox />
            ) : (
              <ShowCommentsButton
                onClick={() => this.setState({ isCommentsVisible: true })}
              >
                Show comments
              </ShowCommentsButton>
            )}
          </Comments>
        </Container>
      </Layout>
    );
  }
}
