const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

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
                code {
                  scope
                }
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
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMdx.edges;

        // Create blog posts pages.
        posts.forEach(({ node }) => {
          console.log('\n\n\nCREATING PAGE', node);
          createPage({
            path: `/blog${node.fields.slug}`,
            component: componentWithMDXScope(
              path.resolve('./src/templates/BlogPostTemplate.js'),
              node.code.scope
            ),
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
            component: componentWithMDXScope(
              path.resolve('./src/templates/BlogListTemplate.js'),
              posts[index].node.code.scope
            ),
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
  }
};
