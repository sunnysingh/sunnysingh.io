const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const readingTime = require(`reading-time`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMdx.edges;

        // Create blog posts pages.
        posts.forEach(({ node }) => {
          createPage({
            path: `/blog${node.fields.slug}`,
            component: path.resolve('./src/templates/BlogPostTemplate.js'),
            context: {
              slug: node.fields.slug,
            },
          });
        });

        // Create paginated blog pages.
        const postsPerPage = 6;
        const pagesCount = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: pagesCount }).forEach((_, index) => {
          createPage({
            path: index === 0 ? `/blog` : `/blog/${index + 1}`,
            component: path.resolve('./src/templates/BlogListTemplate.js'),
            context: {
              pagesCount,
              limit: postsPerPage,
              skip: index * postsPerPage,
              currentPage: index + 1,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(node.body),
    });
  }
};
